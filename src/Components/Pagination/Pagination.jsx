import React, {useState} from 'react';
import style from "./style.module.scss";




const Pagination = ({booksPerPage, totalBooks, paginate, handleBooksPerPageChange}) =>{
      const pageNumbers=[];
    for (let i=1; i<=Math.ceil(totalBooks/booksPerPage); i++){
        pageNumbers.push(i);
    }


return (
<div className={style.pagination}>
    <p>Books shown on page</p>
<div className={style.select}>
  <select value={booksPerPage} onChange={handleBooksPerPageChange}>
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={15}>15</option>
    <option value={20}>20</option>
  </select>
</div>
  <div >
    <ul className={style.pageNumbers}>
       { 
       pageNumbers.map(number=>(
       <li className={style.pageItem} key={number}>
            <button className={style.pageLink} onClick={(evt)=>paginate(number, evt)}>
                {number}
                </button>   
                </li>
                ))
                }
                </ul>
        
  
</div>
</div>
    )
}



export default Pagination;


