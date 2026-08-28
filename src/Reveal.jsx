import React from "react";
import { useReveal } from "./useReveal";

const ANIM_MAP = {
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  "stagger-slow": "reveal-stagger-slow",
};

export default function Reveal({
  children,
  className = "",
  stagger = false,
  anim = "",
  as: Tag = "div",
  ...props
}) {
  const { ref, visible } = useReveal();

  const baseClass = ANIM_MAP[anim] || (stagger ? "reveal-stagger" : "reveal");

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${visible ? "visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
