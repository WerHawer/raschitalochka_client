import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";
import logger from "redux-logger";

const persistConfig = {
  key: "raschitalochka",
  storage,
  whitelist: ["test"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware(), logger],
});

const persistor = persistStore(store);

export { store, persistor };
