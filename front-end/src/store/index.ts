import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import attractionReducer from "./attractionSlice";

export const store = configureStore({
  reducer: attractionReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

