import * as Yup from 'yup';
import { formatDate } from '../../../../../../../../../utils/date-converter';

const qualificationYupObject = Yup.object({
  institution: Yup.string().required().label('Institution'),
  courseOrQualification: Yup.string()
    .required()
    .label('Course or Qualification'),
  qualificationComplete: Yup.boolean(),
  finished: Yup.date()
    .max(new Date(), ({ max }) => `Date needs to be before ${formatDate(max)}.`)
    .nullable()
    .notRequired(),
  expectedFinish: Yup.date()
    .min(new Date(), ({ min }) => `Date needs to be after ${formatDate(min)}.`)
    .nullable()
    .notRequired(),
  courseHighlights: Yup.string().nullable().notRequired(),
});

export { qualificationYupObject };
