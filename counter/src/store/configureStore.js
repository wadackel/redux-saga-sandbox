import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware,
      logger()
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
