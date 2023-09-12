import { combineReducers } from '@reduxjs/toolkit';
import { RootReducer } from 'reactRedux/types';
import SessionReducer from './sessions.reducer';

export const rootReducer = combineReducers<RootReducer>({
  session: SessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
