import React from "react";
import { mount } from "enzyme";
import Room from "../Room";
import Lobby from "../Lobby";

describe("Room", () => {
  it("renders", () => {
    mount(<Room />);
  });
});
