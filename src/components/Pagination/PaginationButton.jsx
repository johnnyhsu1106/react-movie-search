import style from './PaginationButton.module.css'


const PaginationButton = ( { 
  onClickButton, 
  text 
}) => {
  return (
    (onClickButton && text) ? <button className={style.btn} onClick={onClickButton}>{text}</button> : null
  )
}

export default PaginationButton;