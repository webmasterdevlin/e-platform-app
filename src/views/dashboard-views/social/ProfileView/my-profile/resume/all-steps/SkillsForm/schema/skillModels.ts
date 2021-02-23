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

export interface SkillModels {
  id: string;
  name: string;
  specialization: string;
  semesters: Semester[];
}

export interface SemesterIDs {
  id: string;
  programmeId: string;
}

export interface SkillNameValue {
  id: string;
  code: string;
  name: string;
  subjectModule: SubjectModule;
  semesterIDs: SemesterIDs;
}

export interface SkillChipValue {
  skillId: string;
  skillName: string;
  skillLevel: number;
}

export interface NonAcademic {
  id: string;
  name: string;
  description: string;
}
