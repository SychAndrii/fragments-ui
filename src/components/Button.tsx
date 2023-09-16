type Props = {
    text: string,
    isDisabled?: boolean
    clickHandler?: () => void
}

const Button = ({text, clickHandler, isDisabled = false}: Props) => {
  return (
    <button onClick={clickHandler} disabled={isDisabled} className=' disabled:bg-slate-300 bg-slate-400 text-white py-2 px-4 rounded-md hover:bg-slate-500' >
        {text}
    </button>
  )
}

export default Button