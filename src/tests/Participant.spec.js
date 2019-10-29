import React from "react";
import { mount } from "enzyme";
import Participant from "../Participant";
import Lobby from "../Lobby";

describe("Participant", () => {
  it("renders", () => {
    mount(<Participant />);
  });
});
