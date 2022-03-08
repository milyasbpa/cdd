import React from "react";
import classes from "./Button.module.scss";
import Typography from "../Typography";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "long" | "medium1" | "medium2" | "small";
type State = "default" | "disable";
type TextTransform = "lowercase" | "uppercase" | "camelcase";
export interface ButtonProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  handleClick?: () => void;
  testId?: string;
  state?: State;
  textTransform?: TextTransform;
  // iconposition -> right,left
  // state -> loading, default, disable, pressed, hover (desktop)
}

const Button = ({
  label = "",
  variant = "primary",
  size = "small",
  testId = "",
  state = "default",
  textTransform = "lowercase",
  handleClick = () => null,
}: ButtonProps) => {
  const variantTypography = (size: Size) =>
    size === "long"
      ? "subtitle-small"
      : size === "medium1"
      ? "subtitle-small"
      : size === "medium2"
      ? "subtitle-small"
      : "body-base";

  const weightTypography = (size: Size) =>
    size === "long"
      ? "bold"
      : size === "medium1"
      ? "bold"
      : size === "medium2"
      ? "semibold"
      : "bold";
  const clickCondition = (state: State) => {
    if (state !== "disable") {
      handleClick();
    }
    return () => null;
  };
  return (
    <button
      data-testid={testId}
      className={`${classes.button} ${
        classes[`button-variant-${variant}-${state}`]
      } ${classes[`button-size-${size}`]}`}
      onClick={clickCondition(state)}
    >
      <Typography
        textTransform={textTransform}
        text={label}
        variant={variantTypography(size)}
        weight={weightTypography(size)}
      />
    </button>
  );
};

export default Button;
