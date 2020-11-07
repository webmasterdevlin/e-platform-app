import * as Yup from 'yup';
import { formatDate } from '../../../../../../../../../utils/date-converter';

const licensesCertificationsYupObject = Yup.object({
  name: Yup.string().required().label('Name'),
  issuingOrganization: Yup.string().required().label('Issuing Organization'),
  doesNotExpire: Yup.boolean().nullable().notRequired(),
  issueDate: Yup.date().max(
    new Date(),
    ({ max }) => `Date needs to be before ${formatDate(max)}.`,
  ),
  expirationDate: Yup.date().min(
    Yup.ref('issueDate'),
    ({ min }) => `Date needs to be after ${formatDate(min)}.`,
  ),
  credentialId: Yup.string().nullable().notRequired(),
  credentialUrl: Yup.string().url().nullable().notRequired(),
});

export { licensesCertificationsYupObject };
