import { HeroModel } from './hero-types';
import { api, EndPoints } from '../../utils/axios';

export async function getHeroesAxios() {
  return await api.get<HeroModel[]>(EndPoints.heroes);
}

export async function deleteHero(id: string) {
  return await api.delete<void>(`${EndPoints.heroes}/${id}`);
}

export async function postHeroAxios(newHero: HeroModel) {
  return await api.post<HeroModel>(EndPoints.heroes, newHero);
}
