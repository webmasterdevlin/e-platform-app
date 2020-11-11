/*
* {
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "jobTitle": "string",
  "companyName": "string",
  "location": "string",
  "started": "2020-11-11T00:54:39.101Z",
  "ended": "2020-11-11T00:54:39.101Z",
  "isCurrentRole": true,
  "description": "string"
}
* */

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
