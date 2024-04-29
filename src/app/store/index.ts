import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { newsListReducer } from "entities/NewsList/model/news-list-reducer";

const rootReducer = combineReducers({ NEWS_LIST: newsListReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type GetState = typeof store.getState;
