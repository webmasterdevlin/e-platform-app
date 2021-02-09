import React, { useEffect, useState } from 'react';
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
import { SkillsModel, skillsValues } from './SkillsForm/schema/skills.value';
import { getCertificatesAxios } from './CertificationsForm/certifications.service';
import { getSkillsAxios } from './SkillsForm/skills.service';
import MyProfileForm from '../../components/my-profile-form';
import {
  myProfileEmptyValue,
  MyProfileModel,
} from '../../schema/my-profile-empty.value';
import { getMyProfileAxios } from '../../my-profile.service';

const GetAllStepForms = ({ step }) => {
  const [qualifications, setQualifications] = useState<EducationModel[]>([
    educationValue,
  ]);
  const [experiences, setExperiences] = useState<ExperienceModel[]>([
    experienceValue,
  ]);
  const [certifications, setCertifications] = useState<CertificationModel[]>([
    certificationValue,
  ]);

  const [skills, setSkills] = useState<SkillsModel>(skillsValues);

  const [myProfile, setMyProfile] = useState<MyProfileModel>(
    myProfileEmptyValue,
  );

  useEffect(() => {
    fetchMyProfile().then();
    fetchEducation().then();
    fetchExperience().then();
    fetchCertifications().then();
    fetchSkills().then();
  }, []);

  const fetchMyProfile = async () => {
    const { data } = await getMyProfileAxios();
    setMyProfile(data);
  };

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
    setCertifications(data);
  };

  const fetchSkills = async () => {
    const { data } = await getSkillsAxios();
    setSkills(data);
  };

  const removeExperience = (id: string) => {
    setExperiences([...experiences.filter(e => e.id != id)]);
  };

  const updateExperience = (experience: ExperienceModel) => {
    const index = experiences.findIndex(e => e.id == experience.id);
    experiences[index] = experience;
    setExperiences([...experiences]);
  };

  switch (step) {
    case 0:
      return (
        <>
          <MyProfileForm myProfile={myProfile} />
        </>
      );
    case 1:
      return (
        <>
          <ExperienceFormsContainer
            experiences={experiences}
            fetchExperience={fetchExperience}
            removeExperience={removeExperience}
            updateExperience={updateExperience}
          />
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
          <CertificationFormsContainer certifications={certifications} />
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
          <PersonalSummaryFormsContainer myProfile={myProfile} />
        </>
      );
    default:
      return <>Unknown step</>;
  }
};

export default GetAllStepForms;
