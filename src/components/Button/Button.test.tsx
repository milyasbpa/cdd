import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("Button should renders with default props and should be click", () => {
    const button = render(<Button testId={"button"} />);
    fireEvent.click(button.getByTestId("button"));
  });

  // test props
  test("Button should be send props label with text Primary", () => {
    const text = "Primary";
    render(<Button label={text} />);
    screen.findAllByAltText(text);
  });

  test("Button should be send props size long, medium1, medium2, and small", () => {
    render(<Button size={"long"} />);
    render(<Button size={"medium1"} />);
    render(<Button size={"medium2"} />);
    render(<Button size={"small"} />);
  });

  test("Button clicked and function handleClick props should be call", () => {
    const handleClick = jest.fn();
    const text = "Primary";
    const button = render(<Button label={text} handleClick={handleClick} />);
    fireEvent.click(button.getByText(text));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Button disable clicked and function handleClick props shouldn't be call", () => {
    const handleClick = jest.fn();
    const text = "Primary";
    const button = render(
      <Button state={"disable"} label={text} handleClick={handleClick} />
    );
    fireEvent.click(button.getByText(text));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
