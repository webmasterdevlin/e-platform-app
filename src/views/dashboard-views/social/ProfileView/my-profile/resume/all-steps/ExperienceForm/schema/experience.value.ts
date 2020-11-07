export const experienceValue: ExperienceModel = {
  id: '',
  jobTitle: '',
  companyName: '',
  location: '',
  started: new Date(),
  ended: new Date(),
  stillInRole: false,
  description: '',
};

export type ExperienceModel = {
  id: string;
  jobTitle: string;
  companyName: string;
  location: string;
  started: Date;
  ended: Date;
  stillInRole: boolean;
  description: string;
};
