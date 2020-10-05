export type VillainStateType = {
  readonly villains: VillainModel[];
  readonly villain: VillainModel;
  readonly loading: boolean;
  readonly error: string;
};

export type ApiResponse = Record<string, any>;

export type VillainModel = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
} & ApiResponse;

const villainNamespace = 'villain';

/* action types */
export const VillainActionTypes = {
  FETCH_VILLAINS_REQUEST: `@@/${villainNamespace}/FETCH_VILLAINS_REQUEST`,
  FETCH_VILLAINS_SUCCESS: `@@/${villainNamespace}/FETCH_VILLAINS_SUCCESS`,
  FETCH_VILLAINS_FAIL: `@@/${villainNamespace}/FETCH_VILLAINS_FAIL`,

  REMOVE_VILLAIN_TEMPORARY: `@@/${villainNamespace}/REMOVE_VILLAIN_TEMPORARY`,

  REMOVE_VILLAIN_REQUEST: `@@/${villainNamespace}/REMOVE_VILLAIN_REQUEST`,
  REMOVE_VILLAIN_SUCCESS: `@@/${villainNamespace}/REMOVE_VILLAIN_SUCCESS`,
  REMOVE_VILLAIN_FAIL: `@@/${villainNamespace}/REMOVE_VILLAIN_FAIL`,

  ADD_VILLAIN_REQUEST: `@@/${villainNamespace}/ADD_VILLAIN_REQUEST`,
  ADD_VILLAIN_SUCCESS: `@@/${villainNamespace}/ADD_VILLAIN_SUCCESS`,
  ADD_VILLAIN_FAIL: `@@/${villainNamespace}/ADD_VILLAIN_FAIL`,
};
