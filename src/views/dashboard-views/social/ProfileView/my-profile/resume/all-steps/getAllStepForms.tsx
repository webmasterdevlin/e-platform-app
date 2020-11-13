import React, { useEffect, useState } from 'react';
import PersonalDetailsFormsContainer from './PersonalDetailsForm/personal-details-forms-container';
import ExperienceFormsContainer from './ExperienceForm/experience-forms-container';
import EducationFormsContainer from './EducationForm/education-forms-container';
import CertificationFormsContainer from './CertificationsForm/certification-forms-container';
import SkillsFormsContainer from './SkillsForm/skills-forms-container';
import PersonalSummaryFormsContainer from './PesonalSummaryForm/personal-summary-forms-container';
import {
  EducationModel,
  educationValue,
} from './EducationForm/schema/education.value';
import { getEducationsAxios } from './EducationForm/education.service';
import {
  ExperienceModel,
  experienceValue,
} from './ExperienceForm/schema/experience.value';
import { getExperienceAxios } from './ExperienceForm/experience.service';
import {
  CertificationModel,
  certificationValue,
} from './CertificationsForm/schema/certification.value';
import {
  PersonalDetailsModel,
  personalDetailsValue,
} from './PersonalDetailsForm/schema/personal-details.value';
import {
  PersonalSummaryModel,
  personalSummaryValue,
} from './PesonalSummaryForm/schema/personal-summary.value';
import { SkillsModel, skillsValues } from './SkillsForm/schema/skills.value';
import { getCertificatesAxios } from './CertificationsForm/certifications.service';
import { getPersonalDetailsAxios } from './PersonalDetailsForm/personal-details.service';
import { getPersonalSummaryAxios } from './PesonalSummaryForm/personal-summary.service';
import { getSkillsAxios } from './SkillsForm/skills.service';

const GetAllStepForms = ({ step }) => {
  const [qualifications, setQualifications] = useState<EducationModel[]>([
    educationValue,
  ]);
  const [experiences, setExperiences] = useState<ExperienceModel[]>([
    experienceValue,
  ]);
  const [licensesCertifications, setLicensesCertifications] = useState<
    CertificationModel[]
  >([certificationValue]);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetailsModel>(
    personalDetailsValue,
  );
  const [personalSummary, setPersonalSummary] = useState<PersonalSummaryModel>(
    personalSummaryValue,
  );
  const [skills, setSkills] = useState<SkillsModel>(skillsValues);

  useEffect(() => {
    fetchEducation().then();
    fetchExperience().then();
    fetchCertifications().then();
    fetchPersonalDetails().then();
    fetchPersonalSummary().then();
    fetchSkills().then();
  }, []);

  const fetchEducation = async () => {
    const { data } = await getEducationsAxios();
    setQualifications(data);
  };
  const fetchExperience = async () => {
    const { data } = await getExperienceAxios();
    setExperiences(data);
  };
  const fetchCertifications = async () => {
    const { data } = await getCertificatesAxios();
    setLicensesCertifications(data);
  };
  const fetchPersonalDetails = async () => {
    const { data } = await getPersonalDetailsAxios();
    setPersonalDetails(data);
  };
  const fetchPersonalSummary = async () => {
    const { data } = await getPersonalSummaryAxios();
    setPersonalSummary(data);
  };
  const fetchSkills = async () => {
    const { data } = await getSkillsAxios();
    setSkills(data);
  };

  switch (step) {
    case 0:
      return (
        <>
          <PersonalDetailsFormsContainer personalDetails={personalDetails} />
        </>
      );
    case 1:
      return (
        <>
          <ExperienceFormsContainer experiences={experiences} />
        </>
      );
    case 2:
      return (
        <>
          <EducationFormsContainer educations={qualifications} />
        </>
      );
    case 3:
      return (
        <>
          <CertificationFormsContainer
            licensesCertifications={licensesCertifications}
          />
        </>
      );
    case 4:
      return (
        <>
          <SkillsFormsContainer skills={skills} />
        </>
      );
    case 5:
      return (
        <>
          <PersonalSummaryFormsContainer personalSummary={personalSummary} />
        </>
      );
    default:
      return <>Unknown step</>;
  }
};

export default GetAllStepForms;
