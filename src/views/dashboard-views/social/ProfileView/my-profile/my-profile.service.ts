import { MyProfileModel } from './schema/my-profile-empty.value';
import api from 'utils/axios2';

export async function getMyProfileAxios() {
  return await api.get<MyProfileModel>('Profile');
}

//https://thedreamteamelearningapi20200520103954.azurewebsites.net/api/Profile/certificates

export async function postMyProfileAxios(profile: MyProfileModel) {
  return await api.post<MyProfileModel>('Profile', profile);
}

export async function putMyProfileAxios(profile: MyProfileModel) {
  return await api.put<void>('Profile', profile);
}
