type Props = {
  text: string;
  isDisabled?: boolean;
  clickHandler?: () => void;
};

const Button = ({ text, clickHandler, isDisabled = false }: Props) => {
  return (
    <button
      onClick={clickHandler}
      disabled={isDisabled}
      className=" disabled:bg-highlightDimmed bg-highlight text-[white] py-2 px-4 rounded-md hover:bg-highlightDarken"
    >
      {text}
    </button>
  );
};

export default Button;
