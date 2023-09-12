import { SET_IS_LOGGED, SessionActionTypes } from 'reactRedux/types';

export const setIsLogged = (data: boolean): SessionActionTypes => ({
  type: SET_IS_LOGGED,
  data,
});
