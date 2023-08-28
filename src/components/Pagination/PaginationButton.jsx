import style from './Pagination.module.css'


const PaginationButton = ( { 
  text,
  onClickButton  
}) => {
  if (!onClickButton) {
    return null
  }

  return (
    <button className={style.btn} onClick={onClickButton}>{text}</button>
  )
}

export default PaginationButton;