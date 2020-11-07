export const qualificationValue: QualificationModel = {
  id: '',
  institution: '',
  courseOrQualification: '',
  qualificationComplete: false,
  finished: new Date(),
  expectedFinish: new Date(),
  courseHighlights: '',
};

export type QualificationModel = {
  id: string;
  institution: string;
  courseOrQualification: string;
  qualificationComplete: boolean;
  finished: Date;
  expectedFinish: Date;
  courseHighlights: string;
};
