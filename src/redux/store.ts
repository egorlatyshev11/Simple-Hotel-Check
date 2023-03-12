import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { loadState, saveState } from "shared/helpers/localStorage";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  saveState({
    favoriteReducer: store.getState().favoriteReducer,
  });
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
