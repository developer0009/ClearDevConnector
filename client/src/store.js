// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";
// import { configureStore } from "@reduxjs/toolkit";
// import { createStoreHook } from "react-redux";
// import { applyMiddleware } from "redux";

// initial state is not given by
// const store = configureStore({ rootReducer });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware:
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
