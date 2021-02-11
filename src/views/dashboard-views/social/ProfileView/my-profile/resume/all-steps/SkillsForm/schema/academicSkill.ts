export interface SubjectModule {
  id: string;
  programmeId: string;
  name: string;
  description: string;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  subjectModule: SubjectModule;
}

export interface Semester {
  id: string;
  programmeId: string;
  name: string;
  durationInDays: number;
  subjects: Subject[];
}

export interface AcademicSkill {
  id: string;
  name: string;
  specialization: string;
  semesters: Semester[];
}
