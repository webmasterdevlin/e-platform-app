export const educationValue: EducationModel = {
  id: '',
  institution: '',
  qualification: '',
  isCourseCompleted: false,
  completedDate: new Date(),
  expectedCompletionDate: new Date(),
  courseHighlights: '',
};

export type EducationModel = {
  id: string;
  institution: string;
  qualification: string;
  isCourseCompleted: boolean;
  completedDate: Date;
  expectedCompletionDate: Date;
  courseHighlights: string;
};
