import assert from "power-assert";
import { createAction } from "redux-actions";
import counter from "../src/reducers/counter";
import { INCREMENT, INCREMENT_IF_ODD, DECREMENT } from "../src/actions";

describe("counter reducer", () => {
  it("should return the initial state", () => {
    assert(counter(undefined, {}) === 0);
  });

  it("should handle INCREMENT", () => {
    const action = createAction(INCREMENT)();
    assert(counter(undefined, action) === 1);
    assert(counter(1, action) === 2);
  });

  it("should handle INCREMENT_IF_ODD", () => {
    const action = createAction(INCREMENT_IF_ODD)();
    assert(counter(undefined, action) === 0);
    assert(counter(1, action) === 2);
  });

  it("should handle DECREMENT", () => {
    const action = createAction(DECREMENT)();
    assert(counter(undefined, action) === -1);
    assert(counter(-1, action) === -2);
  });
});
