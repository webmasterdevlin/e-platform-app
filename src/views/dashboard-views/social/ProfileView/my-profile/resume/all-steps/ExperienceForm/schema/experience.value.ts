export const experienceValue: ExperienceModel = {
  companyName: '',
  description: '',
  ended: new Date(),
  id: '',
  isCurrentRole: false,
  jobTitle: '',
  location: '',
  started: new Date(),
};

export type ExperienceModel = {
  id: string;
  jobTitle: string;
  companyName: string;
  location: string;
  started: Date;
  ended: Date;
  isCurrentRole: boolean;
  description: string;
};
