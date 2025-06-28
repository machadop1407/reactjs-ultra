import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import "@testing-library/jest-dom";

describe("Greeting Component", () => {
  it("renders the greeting message", () => {
    render(<Greeting name="Pedro" age={99} />);

    expect(
      screen.getByText("Hello, Pedro! He is 99 years old.")
    ).toBeInTheDocument();
  });
});
