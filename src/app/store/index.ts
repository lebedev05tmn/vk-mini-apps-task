import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { newsListReducer } from "entities/NewsList";
import { newsReducer } from "entities/News";
import { commentsReducer } from "entities/Comments/model/comments-reducer";

const rootReducer = combineReducers({
  NEWS_LIST: newsListReducer,
  NEWS: newsReducer,
  COMMENTS: commentsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
