import React, { useCallback, useState, useEffect } from 'react';
import type { FC, ChangeEvent } from 'react';
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles,
} from '@material-ui/core';

import type { Theme } from '../../../../themes/dashboard-theme';
import axios from '../../../../utils/axios';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import Page from '../../../../components/Page';
import type { Profile } from '../../../../types/social';
import Header from './Header';
import Timeline from './Timeline';
import Connections from './Connections';
import MyProfileContainer from './my-profile/my-profile-container';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
  },
}));

const ProfileView: FC = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [currentTab, setCurrentTab] = useState<string>('timeline');
  const [profile, setProfile] = useState<Profile | null>(null);

  const tabs = [
    { value: 'timeline', label: 'Timeline' },
    { value: 'connections', label: 'Connections' },
    { value: 'my-profile', label: 'My Profile' },
  ];

  const handleTabsChange = (event: ChangeEvent, value: string): void => {
    setCurrentTab(value);
  };

  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get<{ profile: Profile }>(
        '/api/social/profile',
      );

      if (isMountedRef.current) {
        setProfile(response.data.profile);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (!profile) {
    return null;
  }

  return (
    <Page className={classes.root} title="Profile">
      <Header profile={profile} />
      <Container maxWidth="lg">
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            textColor="secondary"
            variant="scrollable"
          >
            {tabs.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box py={3} pb={6}>
          {currentTab === 'timeline' && <Timeline profile={profile} />}
          {currentTab === 'connections' && <Connections />}
          {currentTab === 'my-profile' && <MyProfileContainer />}
        </Box>
      </Container>
    </Page>
  );
};

export default ProfileView;
