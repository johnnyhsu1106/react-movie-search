const PaginationButton = ( { 
  onClickButton, 
  text 
}) => {
  return (
    (onClickButton && text) ? <button className='btn' onClick={onClickButton}>{text}</button> : null
  )
}

export default PaginationButton;