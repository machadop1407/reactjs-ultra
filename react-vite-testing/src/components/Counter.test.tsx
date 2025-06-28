import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("renders the initial value", () => {
    render(<Counter initialValue={15} />);
    expect(screen.getByText("15")).toBeInTheDocument();
  });

  it("increments the count on button click", () => {
    render(<Counter initialValue={15} />);
    expect(screen.getByText("15")).toBeInTheDocument();

    const buttonElement = screen.getByText("Increment");
    fireEvent.click(buttonElement);

    const countElement = screen.getByTestId("countValue");
    expect(countElement).toHaveTextContent("16");

    fireEvent.click(buttonElement);
    expect(countElement).toHaveTextContent("17");
  });

  it("increments the count on button click", () => {
    render(<Counter initialValue={15} />);
    expect(screen.getByText("15")).toBeInTheDocument();

    const buttonElement = screen.getByText("Decrement");
    fireEvent.click(buttonElement);

    expect(screen.getByText("14")).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(screen.getByText("13")).toBeInTheDocument();
  });
});
