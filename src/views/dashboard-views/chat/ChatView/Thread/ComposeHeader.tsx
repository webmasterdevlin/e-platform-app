import React, { useState, useRef } from 'react';
import type { ChangeEvent, FC, FocusEvent } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Popper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'themes/dashboard-theme';
import type { Contact } from 'types/chat';
import axios from 'utils/axios';

interface ComposeHeaderProps {
  className?: string;
  onAddRecipient?: (contact: Contact) => void;
  onRemoveRecipient?: (recipientId: string) => void;
  recipients: any[];
}

const getFilteredSearchResults = (
  results: Contact[],
  recipients: any[],
): any[] => {
  const recipientIds = recipients.reduce((acc, recipient) => {
    return [...acc, recipient.id];
  }, []);

  return results.filter(result => !recipientIds.includes(result.id));
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    padding: theme.spacing(2),
  },
  container: {
    marginLeft: theme.spacing(1),
  },
  recipient: {
    marginLeft: 4,
    marginRight: 4,
  },
  input: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 16,
    height: 32,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  compactInput: {
    maxWidth: 120,
  },
  searchResults: {
    marginTop: theme.spacing(1),
    maxWidth: '100%',
    width: 320,
  },
}));

const ComposeHeader: FC<ComposeHeaderProps> = ({
  className,
  onAddRecipient,
  onRemoveRecipient,
  recipients,
  ...rest
}) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [query, setQuery] = useState<string>('');
  const [isSearchFocused, setSearchFocused] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<Contact[]>([]);

  const filteredSearchResults = getFilteredSearchResults(
    searchResults,
    recipients,
  );
  const displayResults = query && isSearchFocused;

  const handleSearchChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    try {
      event.persist();

      const { value } = event.target;

      setQuery(value);

      if (value) {
        const response = await axios.get<{ results: any[] }>(
          '/api/chat/search',
          {
            params: {
              query: value,
            },
          },
        );

        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchBlur = (event: FocusEvent<HTMLInputElement>) => {
    event.persist();

    if (!displayResults) {
      setSearchFocused(false);
    }
  };

  const handleSearchFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.persist();
    setSearchFocused(true);
  };

  const handleSearchResultsClickAway = (): void => {
    setSearchFocused(false);
  };

  const handleAddRecipient = (contact: Contact): void => {
    setQuery('');

    if (onAddRecipient) {
      onAddRecipient(contact);
    }
  };

  const handleRemoveRecipient = (recipientId: string): void => {
    if (onRemoveRecipient) {
      onRemoveRecipient(recipientId);
    }
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography variant="body1" color="textSecondary">
        To:
      </Typography>
      <div className={classes.container} ref={containerRef}>
        {recipients.map(recipient => (
          <Chip
            className={classes.recipient}
            color="primary"
            key={recipient.id}
            label={recipient.name}
            onDelete={() => handleRemoveRecipient(recipient.id)}
            size="small"
          />
        ))}
        <Input
          className={clsx(classes.input, {
            [classes.compactInput]: recipients.length > 0,
          })}
          disableUnderline
          onBlur={handleSearchBlur}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          placeholder={recipients.length === 0 ? 'Search contacts' : ''}
          value={query}
        />
      </div>
      {displayResults && (
        <ClickAwayListener onClickAway={handleSearchResultsClickAway}>
          <Popper
            anchorEl={containerRef.current}
            open={isSearchFocused}
            placement="bottom-start"
          >
            <Paper className={classes.searchResults}>
              {filteredSearchResults.length === 0 ? (
                <Box pb={2} pt={2} px={2} textAlign="center">
                  <Typography color="textPrimary" gutterBottom variant="h4">
                    Nothing Found
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    We couldn&apos;t find any matches for &quot;
                    {query}
                    &quot;. Try checking for typos or using complete words.
                  </Typography>
                </Box>
              ) : (
                <>
                  <Box px={2} pt={2}>
                    <Typography color="textSecondary" variant="h6">
                      Contacts
                    </Typography>
                  </Box>
                  <List>
                    {filteredSearchResults.map(result => (
                      <ListItem
                        button
                        key={result.id}
                        onClick={() => handleAddRecipient(result)}
                      >
                        <ListItemAvatar>
                          <Avatar src={result.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={result.name}
                          primaryTypographyProps={{
                            color: 'textPrimary',
                            noWrap: true,
                            variant: 'h6',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Paper>
          </Popper>
        </ClickAwayListener>
      )}
    </div>
  );
};

ComposeHeader.propTypes = {
  className: PropTypes.string,
  onAddRecipient: PropTypes.func,
  onRemoveRecipient: PropTypes.func,
  recipients: PropTypes.array,
};

ComposeHeader.defaultProps = {
  onAddRecipient: () => {},
  onRemoveRecipient: () => {},
  recipients: [],
};

export default ComposeHeader;
