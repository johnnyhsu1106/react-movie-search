import  PaginationButton from './PaginationButton';

const Pagination = ({ 
  pageNumber, 
  numOfPages,
  onClickNavButton
}) => {
  return (
    <div className='nav-btns'>
      <PaginationButton
        onClickButton={ pageNumber === 1 ? null : () => { onClickNavButton(-1, 1) }} 
        text='prev'/>

      <PaginationButton
        onClickButton={ pageNumber === numOfPages ? null : () => { onClickNavButton(1, numOfPages)}} 
        text='next'/>
    </div>
  )
}

export default Pagination