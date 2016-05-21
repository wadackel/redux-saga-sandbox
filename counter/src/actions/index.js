import { createAction } from "redux-actions";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_ASYNC = "INCREMENT_ASYNC";
export const INCREMENT_IF_ODD = "INCREMENT_IF_ODD";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = createAction(INCREMENT_ASYNC);
export const incrementIfOdd = createAction(INCREMENT_IF_ODD);
