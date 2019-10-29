import React from "react";
import { mount } from "enzyme";
import Lobby from "../Lobby";

describe("Lobby", () => {
  it("renders", () => {
    mount(<Lobby />);
  });
});
