import * as Yup from 'yup';
import { formatDate } from '../../../../../../../../../utils/date-converter';

const certificationsYupObject = Yup.object({
  name: Yup.string().required().label('Name'),
  issuer: Yup.string().required().label('Issuing Organization'),
  isCertificateNeverExpire: Yup.boolean().nullable().notRequired(),
  issueDate: Yup.date().max(
    new Date(),
    ({ max }) => `Date needs to be before ${formatDate(max)}.`,
  ),
  expiryDate: Yup.date().min(
    Yup.ref('issueDate'),
    ({ min }) => `Date needs to be after ${formatDate(min)}.`,
  ),
  certificateId: Yup.string().nullable().notRequired(),
  certificateUrl: Yup.string().url().nullable().notRequired(),
});

export { certificationsYupObject };
