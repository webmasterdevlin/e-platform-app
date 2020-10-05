export type AntiHeroStateType = {
  readonly antiHeroes: AntiHeroModel[];
  readonly antiHero: AntiHeroModel;
  readonly loading: boolean;
  readonly error: string;
  readonly tempData?: any[];
};

export type ApiResponse = Record<string, any>;

export type AntiHeroModel = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
} & ApiResponse;

export const antiHeroNamespace = 'antiHero';

/* action types */
export const AntiHeroActionTypes = {
  FETCH_ANTI_HEROES: `@@/${antiHeroNamespace}/FETCH_ANTI_HEROES`,
  FETCH_ANTI_HERO_By_ID: `@@/${antiHeroNamespace}/FETCH_ANTI_HEROES_By_ID`,
  REMOVE_ANTI_HERO: `@@/${antiHeroNamespace}/REMOVE_ANTI_HERO`,
  ADD_ANTI_HERO: `@@/${antiHeroNamespace}/ADD_ANTI_HERO`,
  UPDATE_ANTI_HERO: `@@/${antiHeroNamespace}/UPDATE_ANTI_HERO`,
};
