export const qualificationValue: QualificationModel = {
  id: '',
  institution: '',
  qualification: '',
  isCourseCompleted: false,
  completedDate: new Date(),
  expectedCompletionDate: new Date(),
  courseHighlights: '',
};

export type QualificationModel = {
  id: string;
  institution: string;
  qualification: string;
  isCourseCompleted: boolean;
  completedDate: Date;
  expectedCompletionDate: Date;
  courseHighlights: string;
};
