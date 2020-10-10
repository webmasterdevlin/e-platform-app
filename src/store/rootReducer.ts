import { combineReducers } from '@reduxjs/toolkit';
import { reducer as oidc } from '@axa-fr/react-oidc-redux';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as chatReducer } from 'src/slices/chat';
import { reducer as formReducer } from 'redux-form';
import { reducer as kanbanReducer } from 'src/slices/kanban';
import { reducer as mailReducer } from 'src/slices/mail';
import { reducer as notificationReducer } from 'src/slices/notification';
import antiHeroesReducer from '../features/anti-heroes/anti-hero.slice';
import { heroReducer } from '../features/heroes/hero-reducer';
import { villainReducer } from '../features/villains/villain-reducer';

const rootReducer = combineReducers({
  oidc,
  calendar: calendarReducer,
  chat: chatReducer,
  form: formReducer,
  kanban: kanbanReducer,
  mail: mailReducer,
  notifications: notificationReducer,
  antiHero: antiHeroesReducer,
  hero: heroReducer,
  villain: villainReducer,
});
export const createReducer = () => rootReducer;
export default rootReducer;
