import { HeroStateType, HeroActionTypes } from './hero-types';

const initialState: HeroStateType = {
  heroes: [],
  hero: {
    id: '',
    firstName: '',
    lastName: '',
    house: '',
    knownAs: '',
  },
  loading: false,
  error: '',
};

type ActionType = {
  type: string;
  payload: any;
};

export const heroReducer = (
  state: HeroStateType = initialState,
  action: ActionType,
): HeroStateType => {
  switch (action.type) {
    case HeroActionTypes.FETCH_HEROES_REQUEST:
      return { ...state, loading: true };
    case HeroActionTypes.FETCH_HEROES_SUCCESS:
      return { ...state, loading: false, heroes: action.payload };
    case HeroActionTypes.FETCH_HEROES_FAIL:
      return { ...state, loading: false, error: action.payload };

    case HeroActionTypes.REMOVE_HERO_TEMPORARY:
      return {
        ...state,
        heroes: state.heroes.filter(hero => hero.id !== action.payload),
      };

    case HeroActionTypes.REMOVE_HERO_REQUEST:
      return { ...state, loading: true };
    case HeroActionTypes.REMOVE_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        heroes: state.heroes.filter(hero => hero.id !== action.payload),
      };
    case HeroActionTypes.REMOVE_HERO_FAIL:
      return { ...state, loading: false, error: action.payload };

    case HeroActionTypes.ADD_HERO_REQUEST:
      return { ...state, loading: true };
    case HeroActionTypes.ADD_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        heroes: [...state.heroes, action.payload],
      };
    case HeroActionTypes.ADD_HERO_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
