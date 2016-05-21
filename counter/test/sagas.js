import assert from "power-assert";
import { createAction } from "redux-actions";
import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { incrementAsync } from "../src/sagas";
import { INCREMENT } from "../src/actions";

describe("sagas", () => {
  it("incrementAsync()", () => {
    const saga = incrementAsync();

    assert.deepStrictEqual(
      saga.next().value,
      call(delay, 1000)
    );

    assert.deepStrictEqual(
      saga.next().value,
      put(createAction(INCREMENT)())
    );

    assert.deepStrictEqual(
      saga.next(),
      { done: true, value: undefined }
    );
  });
});
