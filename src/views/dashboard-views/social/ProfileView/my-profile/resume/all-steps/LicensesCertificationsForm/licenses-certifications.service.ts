import { LicenseCertificationModel } from './schema/license-certification.value';
import api from '../../../../../../../../utils/axios2';

export async function getCertificatesOrLicensesAxios() {
  return await api.get<LicenseCertificationModel[]>('Profile/certificates');
}

export async function deleteCertificateOrLicenseAxios(id: string) {
  return await api.put<void>('Profile/certificates/' + id);
}

export async function postCertificateOrLicenseAxios(
  value: LicenseCertificationModel,
) {
  return await api.post<LicenseCertificationModel>(
    'Profile/certificates',
    value,
  );
}

export async function putCertificateOrLicenseAxios(
  value: LicenseCertificationModel,
) {
  return await api.put<void>('Profile/certificates', value);
}
