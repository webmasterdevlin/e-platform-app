import { CertificationModel } from './schema/certification.value';
import api from '../../../../../../../../utils/axios2';

export async function getCertificatesAxios() {
  return await api.get<CertificationModel[]>('Profile/certificates');
}

export async function deleteCertificateAxios(id: string) {
  return await api.put<void>('Profile/certificates/' + id);
}

export async function postCertificateAxios(value: CertificationModel) {
  return await api.post<CertificationModel>('Profile/certificates', value);
}

export async function putCertificateAxios(value: CertificationModel) {
  return await api.put<void>('Profile/certificates', value);
}
