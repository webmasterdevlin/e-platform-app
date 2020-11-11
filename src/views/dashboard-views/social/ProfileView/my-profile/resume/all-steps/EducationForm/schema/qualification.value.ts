/*
 *{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "institution": "string",
  "qualification": "string",
  "isCourseCompleted": true,
  "expectedCompletionDate": "2020-11-11T01:19:30.849Z",
  "courseHighlights": "string"
}
 * */

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
