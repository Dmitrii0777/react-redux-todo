import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
// export const store = createStore(rootReducer, devToolsEnhancer());
export const persistor = persistStore(store);
