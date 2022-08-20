import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./features/Loader/loaderSlice";
import topStoriesReducer from "./features/TopStories/topStoriesSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    topStories: topStoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["tripDetails/setFirstDayCover", "tripDetails/setLastDayCover", "tripDetails/setDateOfBirth"],
        ignoredPaths: ["tripDetails.firstDayCover", "tripDetails.lastDayCover", "tripDetails.dateOfBirth"],
      },
    }),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
