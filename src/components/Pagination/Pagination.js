import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info,pageNumber,setPageNumber}) => {
 
  return  (
  <ReactPaginate 
  className='pagination justify-content-center gap-3 my-3'
  forcePage={pageNumber === 1? 0 : pageNumber - 1}
  breakLabel="..."
  nextLabel="Next"
  previousLabel="Prev"
  nextClassName='btn btn-light'
  previousClassName='btn btn-light'
  pageClassName='page-item'
  pageLinkClassName='page-link'
  activeClassName='active'
  onPageChange={(data)=>{
    setPageNumber(data.selected + 1);
  }}
  pageCount={info?.pages}
  />
  );
};

export default Pagination
