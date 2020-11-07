import { LicenseCertificationModel } from './schema/license-certification.value';
import { api } from '../../../../utils/axios';

export async function getLicensesCertificationsAxios() {
  return await api.get<LicenseCertificationModel[]>('licenses-certifications');
}

export async function deleteEducationAxios(id: string) {
  return await api.put<void>('licenses-certifications/' + id);
}

export async function postEducationAxios(value: LicenseCertificationModel) {
  return await api.post<LicenseCertificationModel>(
    'licenses-certifications',
    value,
  );
}

export async function putEducationAxios(value: LicenseCertificationModel) {
  return await api.put<void>('licenses-certifications', value);
}
