/* action creators of Saga */
import { HeroModel, HeroActionTypes } from './hero-types';
import { Action } from 'redux';

type ActionType = {
  readonly payload?: any;
} & Action;

export const getHeroesAction = (): ActionType => ({
  type: HeroActionTypes.FETCH_HEROES_REQUEST,
});

export const removeHeroByIdTemporaryAction = (id: string): ActionType => ({
  type: HeroActionTypes.REMOVE_HERO_TEMPORARY,
  payload: id,
});

export const deleteHeroByIdAction = (id: string): ActionType => ({
  type: HeroActionTypes.REMOVE_HERO_REQUEST,
  payload: id,
});

export const postHeroAction = (hero: HeroModel): ActionType => ({
  type: HeroActionTypes.ADD_HERO_REQUEST,
  payload: hero,
});
