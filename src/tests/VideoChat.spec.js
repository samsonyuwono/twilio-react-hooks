import React from "react";
import { mount } from "enzyme";
import VideoChat from "../VideoChat";
import Lobby from "../Lobby";

describe("VideoChat", () => {
  it("renders", () => {
    mount(<VideoChat />);
  });
});

describe("Lobby", () => {
  it("renders", () => {
    mount(<Lobby />);
  });
});
