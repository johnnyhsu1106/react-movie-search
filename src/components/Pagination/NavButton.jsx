import style from './Pagination.module.css'


const NavButton = ( { 
  text,
  onClickButton  
}) => {
  return (
    <button className={style.btn} onClick={onClickButton}>{text}</button>
  )
}

export default NavButton;