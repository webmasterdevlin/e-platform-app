import { LicenseCertificationModel } from './schema/license-certification.value';
import api from '../../../../../../../../utils/axios2';

export async function getLicensesCertificationsAxios() {
  return await api.get<LicenseCertificationModel[]>('Profile/certificates');
}

export async function deleteEducationAxios(id: string) {
  return await api.put<void>('Profile/certificates/' + id);
}

export async function postEducationAxios(value: LicenseCertificationModel) {
  return await api.post<LicenseCertificationModel>(
    'Profile/certificates',
    value,
  );
}

export async function putEducationAxios(value: LicenseCertificationModel) {
  return await api.put<void>('Profile/certificates', value);
}
