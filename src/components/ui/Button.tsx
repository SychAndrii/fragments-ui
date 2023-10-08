import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  clickHandler?: () => void;
};

const Button = ({ text, clickHandler, ...rest }: Props) => {
  return (
    <button
      onClick={clickHandler}
      {...rest}
      className=" disabled:bg-highlightDimmed bg-highlight text-[white] py-2 px-4 rounded-md hover:bg-highlightDarken"
    >
      {text}
    </button>
  );
};

export default Button;
