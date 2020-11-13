import * as Yup from 'yup';
import { formatDate } from '../../../../../../../../../utils/date-converter';

const qualificationYupObject = Yup.object({
  institution: Yup.string().required().label('Institution'),
  qualification: Yup.string().required().label('Course or Qualification'),
  isCourseCompleted: Yup.boolean(),
  completedDate: Yup.date()
    .max(new Date(), ({ max }) => `Date needs to be before ${formatDate(max)}.`)
    .nullable()
    .notRequired(),
  expectedCompletionDate: Yup.date()
    .when('isCourseCompleted', {
      is: true,
      then: Yup.date().nullable().notRequired(),
    })
    .when('isCurrentRole', {
      is: false,
      then: Yup.date().nullable().notRequired(),
    }),
  courseHighlights: Yup.string().nullable().notRequired(),
});

export { qualificationYupObject };

/*
*  .min(new Date(), ({ min }) => `Date needs to be after ${formatDate(min)}.`)
    .nullable()
    .notRequired()
* */
