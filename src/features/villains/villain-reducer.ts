import { VillainStateType, VillainActionTypes } from './villain-types';

const initialState: VillainStateType = {
  villains: [],
  villain: {
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

export const villainReducer = (
  state: VillainStateType = initialState,
  action: ActionType,
): VillainStateType => {
  switch (action.type) {
    case VillainActionTypes.FETCH_VILLAINS_REQUEST:
      return { ...state, loading: true };
    case VillainActionTypes.FETCH_VILLAINS_SUCCESS:
      return { ...state, loading: false, villains: action.payload };
    case VillainActionTypes.FETCH_VILLAINS_FAIL:
      return { ...state, loading: false, error: action.payload };

    case VillainActionTypes.REMOVE_VILLAIN_TEMPORARY:
      return {
        ...state,
        loading: false,
        villains: state.villains.filter(
          villain => villain.id !== action.payload,
        ),
      };

    case VillainActionTypes.REMOVE_VILLAIN_REQUEST:
      return { ...state, loading: true };
    case VillainActionTypes.REMOVE_VILLAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        villains: state.villains.filter(
          villain => villain.id !== action.payload,
        ),
      };
    case VillainActionTypes.REMOVE_VILLAIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    case VillainActionTypes.ADD_VILLAIN_REQUEST:
      return { ...state, loading: true };
    case VillainActionTypes.ADD_VILLAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        villains: [...state.villains, action.payload],
      };
    case VillainActionTypes.ADD_VILLAIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
