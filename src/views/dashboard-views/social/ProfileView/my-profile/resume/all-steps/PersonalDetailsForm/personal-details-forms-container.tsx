import React, { useState } from 'react';
import { PersonalDetailsModel } from './schema/personal-details.value';
import PersonalDetails from './components/personal-details';
import PersonalDetailsForm from './components/personal-details-form';

type Props = {
  personalDetails: PersonalDetailsModel;
};

const PersonalDetailsFormsContainer = ({ personalDetails }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  personalDetails = null;

  return (
    <>
      {isEditing || !personalDetails ? (
        <PersonalDetailsForm
          personalDetails={personalDetails}
          setIsEditing={() => setIsEditing(!isEditing)}
        />
      ) : (
        <>
          {personalDetails && (
            <PersonalDetails
              setIsEditing={() => setIsEditing(!isEditing)}
              personalDetails={personalDetails}
            />
          )}
        </>
      )}
    </>
  );
};

export default PersonalDetailsFormsContainer;
