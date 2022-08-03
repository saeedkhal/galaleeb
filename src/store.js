import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import globalReducer from './features/globalSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    global: globalReducer,
  },
});
