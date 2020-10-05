export type HeroStateType = {
  readonly heroes: HeroModel[];
  readonly hero: HeroModel;
  readonly loading: boolean;
  readonly error: string;
};

export type ApiResponse = Record<string, any>;

export type HeroModel = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
};
export const heroNamespace = 'hero';

/* action types */
export const HeroActionTypes = {
  FETCH_HEROES_REQUEST: `@@/${heroNamespace}/FETCH_HEROES_REQUEST`,
  FETCH_HEROES_SUCCESS: `@@/${heroNamespace}/FETCH_HEROES_SUCCESS`,
  FETCH_HEROES_FAIL: `@@/${heroNamespace}/FETCH_HEROES_FAIL`,

  REMOVE_HERO_TEMPORARY: `@@/${heroNamespace}/REMOVE_HERO_TEMPORARY`,

  REMOVE_HERO_REQUEST: `@@/${heroNamespace}/REMOVE_HERO_REQUEST`,
  REMOVE_HERO_SUCCESS: `@@/${heroNamespace}/REMOVE_HERO_SUCCESS`,
  REMOVE_HERO_FAIL: `@@/${heroNamespace}/REMOVE_HERO_FAIL`,

  ADD_HERO_REQUEST: `@@/${heroNamespace}/ADD_HERO_REQUEST`,
  ADD_HERO_SUCCESS: `@@/${heroNamespace}/ADD_HERO_SUCCESS`,
  ADD_HERO_FAIL: `@@/${heroNamespace}/ADD_HERO_FAIL`,
};
