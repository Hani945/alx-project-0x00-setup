import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClass = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ title, size = "md", shape = "rounded-md", className = "" }) => {
  return (
    <button className={`${sizeClass[size]} ${shape} bg-blue-500 text-white font-medium ${className}`}>
      {title}
    </button>
  );
};

export default Button;
