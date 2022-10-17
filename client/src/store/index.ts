import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from 'app/model';
import registrationReducer from 'pages/autorization/model';
import autorizationReducer from 'pages/registration/model';

const rootReducer = combineReducers({
  appReducer,
  registrationReducer,
  autorizationReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
