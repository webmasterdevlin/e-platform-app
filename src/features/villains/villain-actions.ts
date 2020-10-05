import { Dispatch, ActionCreator, Action } from 'redux';
import { VillainModel, VillainActionTypes } from './villain-types';
import {
  deleteAxios,
  getAxios,
  postAxios,
} from '../../utils/generic-api-calls';
import { EndPoints } from '../../utils/axios';

type ActionType = {
  readonly payload?: any;
} & Action;

/*non-async action creators*/
export const removeVillainByIdTemporaryAction = (id: string): ActionType => {
  return {
    type: VillainActionTypes.REMOVE_VILLAIN_TEMPORARY,
    payload: id,
  };
};

/* async action creators */
export const getVillainsAction: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: VillainActionTypes.FETCH_VILLAINS_REQUEST });

    try {
      const { data } = await getAxios<VillainModel>(EndPoints.villains);
      dispatch({
        type: VillainActionTypes.FETCH_VILLAINS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.FETCH_VILLAINS_FAIL,
        payload: e.message,
      });
    }
  };
};

export const deleteVillainByIdAction: ActionCreator<any> = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: VillainActionTypes.REMOVE_VILLAIN_REQUEST,
    });

    try {
      await deleteAxios<void>(EndPoints.villains, id);
      dispatch({
        type: VillainActionTypes.REMOVE_VILLAIN_SUCCESS,
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.REMOVE_VILLAIN_FAIL,
        payload: e.message,
      });
    }
  };
};

export const postVillainAction: ActionCreator<any> = (
  villain: VillainModel,
) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: VillainActionTypes.ADD_VILLAIN_REQUEST,
    });

    try {
      const { data } = await postAxios<VillainModel>(
        EndPoints.villains,
        villain,
      );
      dispatch({ type: VillainActionTypes.ADD_VILLAIN_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: VillainActionTypes.ADD_VILLAIN_FAIL,
        payload: e.message,
      });
    }
  };
};
