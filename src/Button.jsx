const Button = ( { onClickButton, text }) => {
  window.scrollTo(0, 0);
  return (
    (onClickButton && text) ? <button className='btn' onClick={onClickButton}> {text} </button> : null
  )
}

export default Button