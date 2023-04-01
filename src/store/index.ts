import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    [uiSlice.name]: uiSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  devTools: true,
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
