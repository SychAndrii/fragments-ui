import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  clickHandler?: () => void;
};

const Button = ({ text, clickHandler, ...rest }: Props) => {
  const {
    className,
    ...restCopy
  } = rest;
  return (
    <button
      onClick={clickHandler}
      className={` disabled:bg-highlightDimmed bg-highlight text-[white] py-2 px-4 rounded-md hover:bg-highlightDarken ${className}`}
      {...restCopy}
    >
      {text}
    </button>
  );
};

export default Button;
