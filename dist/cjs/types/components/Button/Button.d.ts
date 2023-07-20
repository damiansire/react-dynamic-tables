import React from "react";
import "./button.css";
export interface ButtonProps {
    label: string;
}
declare const Button: ({ label }: ButtonProps) => React.JSX.Element;
export default Button;
