import React, { FC } from "react";

export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
  React = "reset",
}
type ButtonProps = { type: ButtonTypes | undefined; btnSize?: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<ButtonProps> = ({ btnSize, children, ...props }) => {
  return (
    <button
      {...props}
      className={`group relative ${btnSize ?? "w-full"}  flex justify-center
  py-2 px-4 border border-transparent text-sm font-medium
  rounded-md text-white bg-indigo-600 hover:bg-indigo-700
  focus:outline-none focus:ring-2 focus:ring-offset-2
  focus:ring-indigo-500`}
    >
      {children}
    </button>
  );
};

export default Button;
