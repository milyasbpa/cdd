import * as React from "react";
import Typography from "../Typography";
import style from "./Avatar.module.scss";
export interface IAvatarProps {
  text?: string;
  type?: "letter" | "number" | "icon" | "emblem";
  size?: "lg" | "md" | "sm" | "xs";
  src?: string;
  alt?: string;
  number?: number;
}

export default function Avatar({
  text = "",
  size = "lg",
  type = "letter",
  src = "",
  alt = "",
  number = 0,
}: IAvatarProps) {
  if (type === "icon") {
    return (
      <div className={`${style["avatar"]} ${style[`avatar-size-${size}`]}`}>
        <img src={src} alt={alt} />
      </div>
    );
  }
  if (type === "number") {
    //   ketika lebih dari 999 maka akan di ambil 3 terdepan
    const textNumber: string =
      String(number).length > 3 ? String(number).slice(0, 2) : String(number);
    return (
      <div className={`${style["avatar"]} ${style[`avatar-size-${size}`]}`}>
        <Typography text={textNumber} />
      </div>
    );
  }
  if (type === "emblem") {
    return (
      <div
        className={`${style["avatar-emblem"]} ${style[`avatar-size-${size}`]}`}
      >
        <img src={src} alt={alt} />
      </div>
    );
  }
  const textLetter: string = text.length > 2 ? text.slice(0, 1) : text;
  return (
    <div className={`${style["avatar"]} ${style[`avatar-size-${size}`]}`}>
      <Typography text={textLetter} />
    </div>
  );
}
