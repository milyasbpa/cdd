import React from "react";
import classes from "./Typography.module.scss";

export interface TypographyProps {
  text?: string;
  variant?:
    | "header-base"
    | "header-small"
    | "subtitle-base"
    | "subtitle-small2"
    | "body-base"
    | "body-small"
    | "caption-base";
  weight?: "regular" | "medium" | "semibold" | "bold";
  textTransform?: "lowercase" | "uppercase" | "camelcase";
}

const Typography = ({
  text = "",
  variant = "header-base",
  weight = "regular",
  textTransform = "lowercase",
}: TypographyProps) => {
  const finalText =
    textTransform === "lowercase"
      ? text.toLowerCase()
      : textTransform === "uppercase"
      ? text.toUpperCase()
      : text.charAt(0).toUpperCase();
  return (
    <p
      className={`${classes[`typography`]} ${
        classes[`typography-variant-${variant}`]
      } ${classes[`typography-weight-${weight}`]} `}
    >
      {finalText}
    </p>
  );
};

export default Typography;
