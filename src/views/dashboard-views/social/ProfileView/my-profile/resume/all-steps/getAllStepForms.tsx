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
import { getCertificatesAxios } from './CertificationsForm/certifications.service';
import { getProfileSkillsAxios } from './SkillsForm/skills.service';
import MyProfileForm from '../../components/my-profile-form';
import {
  myProfileEmptyValue,
  MyProfileModel,
} from '../../schema/my-profile-empty.value';
import { getMyProfileAxios } from '../../my-profile.service';
import { ProfileSkill } from './SkillsForm/schema/profileSkill';

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

  const [profileSkills, setProfileSkills] = useState<ProfileSkill[]>();

  const [myProfile, setMyProfile] = useState<MyProfileModel>(
    myProfileEmptyValue,
  );

  useEffect(() => {
    fetchMyProfile();
    fetchEducation();
    fetchExperience();
    fetchCertifications();
    fetchProfileSkills();
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

  const fetchProfileSkills = async () => {
    const { data } = await getProfileSkillsAxios();
    setProfileSkills(data);
  };

  const removeExperience = (id: string) => {
    setExperiences([...experiences.filter(e => e.id != id)]);
  };

  const updateExperience = (experience: ExperienceModel) => {
    const index = experiences.findIndex(e => e.id == experience.id);
    experiences[index] = experience;
    setExperiences([...experiences]);
  };

  const removeQualification = (id: string) => {
    setQualifications([...qualifications.filter(q => q.id != id)]);
  };

  const updateQualification = (education: EducationModel) => {
    const index = qualifications.findIndex(q => q.id == education.id);
    qualifications[index] = education;
    setQualifications([...qualifications]);
  };

  const removeCertificate = (id: string) => {
    setCertifications([...certifications.filter(c => c.id != id)]);
  };

  const updateCertificate = (certification: CertificationModel) => {
    const index = certifications.findIndex(c => c.id == certification.id);
    certifications[index] = certification;
    setCertifications([...certifications]);
  };

  switch (step) {
    case 0:
      return <MyProfileForm myProfile={myProfile} />;
    case 1:
      return (
        <ExperienceFormsContainer
          experiences={experiences}
          fetchExperience={fetchExperience}
          removeExperience={removeExperience}
          updateExperience={updateExperience}
        />
      );
    case 2:
      return (
        <EducationFormsContainer
          educations={qualifications}
          fetchEducation={fetchEducation}
          removeQualification={removeQualification}
          updateQualification={updateQualification}
        />
      );
    case 3:
      return (
        <CertificationFormsContainer
          certifications={certifications}
          fetchCertifications={fetchCertifications}
          removeCertificate={removeCertificate}
          updateCertificate={updateCertificate}
        />
      );
    case 4:
      return (
        <SkillsFormsContainer
          profileSkills={profileSkills}
          fetchProfileSkill={fetchProfileSkills}
        />
      );
    case 5:
      return (
        <PersonalSummaryFormsContainer
          myProfile={myProfile}
          fetchMyProfile={fetchMyProfile}
        />
      );
    default:
      return <>Unknown step</>;
  }
};

export default GetAllStepForms;
