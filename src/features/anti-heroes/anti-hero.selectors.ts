import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './anti-hero.slice';
import { RootState } from '../../store';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.antiHero || initialState;

/*
    For Computing Derived Data
*/

export const selectAThing = createSelector(
  [selectDomain],
  antiHeroState => antiHeroState,
);

export const selectSomething = createSelector(
  [selectDomain],
  antiHeroState => antiHeroState,
);
