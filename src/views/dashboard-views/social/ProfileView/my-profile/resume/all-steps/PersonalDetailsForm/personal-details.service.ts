import { PersonalDetailsModel } from './schema/personal-details.value';
import api from '../../../../../../../../utils/axios2';

export async function getPersonalDetailsAxios() {
  return await api.get<PersonalDetailsModel>('personal-details');
}

export async function postPersonalDetailsAxios(value: PersonalDetailsModel) {
  return await api.post<PersonalDetailsModel>('personal-details', value);
}

export async function putPersonalDetailsAxios(value: PersonalDetailsModel) {
  return await api.put<void>('personal-details', value);
}
