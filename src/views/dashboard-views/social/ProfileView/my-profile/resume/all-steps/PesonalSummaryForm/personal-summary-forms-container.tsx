import React, { useState } from 'react';
import { PersonalSummaryModel } from './schema/personal-summary.value';
import PersonalSummaryForm from './components/personal-summary-form';
import PersonalSummary from './components/personal-summary';
import { MyProfileModel } from '../../../schema/my-profile-empty.value';

type Props = {
  myProfile: MyProfileModel;
};

const PersonalSummaryFormsContainer = ({ myProfile }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  // myProfile = null;

  return (
    <>
      {isEditing || !myProfile ? (
        <PersonalSummaryForm
          myProfile={myProfile}
          setIsEditing={() => setIsEditing(!isEditing)}
        />
      ) : (
        <>
          {myProfile && (
            <PersonalSummary
              setIsEditing={() => setIsEditing(!isEditing)}
              myProfile={myProfile}
            />
          )}
        </>
      )}
    </>
  );
};

export default PersonalSummaryFormsContainer;
