import cx from "classnames";
import React from "react";

import "./input.scss";

type Prop = JSX.IntrinsicElements["input"] & {
  primary?: boolean;
  secondary?: boolean;
  aqua?: boolean;
  green?: boolean;
  type?: string;
  placeholder?: string;
};

const Input: React.FC<Prop> = ({
  primary,
  secondary,
  className,
  aqua,
  green,
  type = "text",
  placeholder,
}) => {
  const inputClass = cx(
    "input",
    {
      "input-primary": primary,
      "input-secondary": secondary,
      "input-aqua": aqua,
      "input-green": green,
    },
    className
  );
  return (
    <div className={inputClass}>
      <p>muhammed</p>
      <input type={type} className={inputClass} placeholder={placeholder} />
    </div>
  );
};

export default Input;
