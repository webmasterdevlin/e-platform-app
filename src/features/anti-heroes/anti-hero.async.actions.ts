import { createAsyncThunk } from '@reduxjs/toolkit';

import { AntiHeroActionTypes, AntiHeroModel } from './anti-hero.types';
import {
  deleteAxios,
  getAxios,
  postAxios,
} from '../../utils/generic-api-calls';
import { EndPoints } from '../../utils/axios';

export const getAntiHeroesAction = createAsyncThunk(
  AntiHeroActionTypes.FETCH_ANTI_HEROES,
  async () => {
    return (await getAxios<AntiHeroModel>(EndPoints.antiHeroes)).data;
  },
);

export const postAntiHeroAction = createAsyncThunk(
  AntiHeroActionTypes.ADD_ANTI_HERO,
  async (antiHero: AntiHeroModel) => {
    return (await postAxios<AntiHeroModel>(EndPoints.antiHeroes, antiHero))
      .data;
  },
);

export const deleteAntiHeroAction = createAsyncThunk(
  AntiHeroActionTypes.REMOVE_ANTI_HERO,
  async (id: string) => {
    return await deleteAxios<void>(EndPoints.antiHeroes, id);
  },
);
