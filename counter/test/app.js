import assert from "power-assert";
import sinon from "sinon";
import { shallow } from "enzyme";
import React from "react";
import { App } from "../src/containers/app";
import { increment, decrement, incrementIfOdd, incrementAsync } from "../src/actions";

function setup() {
  const props = {
    dispatch: sinon.spy(),
    counter: 0
  };

  return { props };
}

describe("<App />", () => {
  it("should handle dispatch", () => {
    const { props } = setup();
    const wrapper = shallow(<App {...props} />);

    wrapper.find(".increment").simulate("click");
    assert.deepStrictEqual(props.dispatch.args[0][0], increment());

    wrapper.find(".decrement").simulate("click");
    assert.deepStrictEqual(props.dispatch.args[1][0], decrement());

    wrapper.find(".incrementIfOdd").simulate("click");
    assert.deepStrictEqual(props.dispatch.args[2][0], incrementIfOdd());

    wrapper.find(".incrementAsync").simulate("click");
    assert.deepStrictEqual(props.dispatch.args[3][0], incrementAsync());
  });
});
