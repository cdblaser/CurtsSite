import IdleClicker from "../../src/components/idle_clicker_components/IdleClicker.js";

describe("<IdleClicker/>", () => {
  it("Mounts component", () => {
    cy.mount(<IdleClicker />);
  });
  it("Damage button works", () => {
    cy.mount(<IdleClicker />);
    cy.get("button").should("contain.text", "damage");
  });
});
