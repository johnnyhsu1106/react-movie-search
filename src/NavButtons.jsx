import  Button from './Button';

const NavButtons = ({ 
  pageNumber, 
  numOfPages,
  onClickNavButton
}) => {
  return (
    <div className='nav-btns'>
      <Button
        onClickButton={ pageNumber === 1 ? null : () => { onClickNavButton(-1, 1) }} 
        text='prev'/>

      <Button
        onClickButton={ pageNumber === numOfPages ? null : () => { onClickNavButton(1, numOfPages)}} 
        text='next'/>
    </div>
  )
}

export default NavButtons