import * as Yup from 'yup';
import { formatDate } from '../../../../../utils/date-converter';

const experienceYupObject = Yup.object({
  jobTitle: Yup.string().required().label('Job Title'),
  companyName: Yup.string().required().label('Company Name'),
  location: Yup.string(),
  started: Yup.date()
    .max(new Date(), ({ max }) => `Date needs to be before ${formatDate(max)}.`)
    .required(),
  ended: Yup.date()
    .when('stillInRole', {
      is: true,
      then: Yup.date().nullable().notRequired(),
    })
    .when('stillInRole', {
      is: false,
      then: Yup.date()
        .nullable()
        .min(
          Yup.ref('started'),
          ({ min }) => `Date needs to be after ${formatDate(min)}.`,
        ),
    }),
  stillInRole: Yup.boolean(),
  description: Yup.string(),
});

export { experienceYupObject };
