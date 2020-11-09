import { MyProfileModel } from './schema/my-profile-empty.value';
import { api } from '../../../../../utils/axios';

export async function getMyProfileAxios() {
  return await api.get<MyProfileModel>('Profile/certificates');
}
//https://thedreamteamelearningapi20200520103954.azurewebsites.net/api/Profile/certificates
export async function postMyProfileAxios(profile: MyProfileModel) {
  return await api.post<MyProfileModel>('my-profile', profile);
}

export async function putMyProfileAxios(profile: MyProfileModel) {
  return await api.put<void>('my-profile', profile);
}
