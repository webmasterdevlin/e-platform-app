import React, { useState } from 'react';
import { PersonalSummaryModel } from './schema/personal-summary.value';
import PersonalSummaryForm from './components/personal-summary-form';
import PersonalSummary from './components/personal-summary';

type Props = {
  personalSummary: PersonalSummaryModel;
};

const PersonalSummaryFormsContainer: React.FC<Props> = ({
  personalSummary,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  personalSummary = null;

  return (
    <>
      {isEditing || !personalSummary ? (
        <PersonalSummaryForm
          personalSummary={personalSummary}
          setIsEditing={() => setIsEditing(!isEditing)}
        />
      ) : (
        <>
          {personalSummary && (
            <PersonalSummary
              setIsEditing={() => setIsEditing(!isEditing)}
              personalSummary={personalSummary}
            />
          )}
        </>
      )}
    </>
  );
};

export default PersonalSummaryFormsContainer;
