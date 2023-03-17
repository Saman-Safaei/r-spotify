import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';

const store = configureStore({
  reducer: {
    [uiSlice.name]: uiSlice.reducer,
  },
  devTools: true,
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
