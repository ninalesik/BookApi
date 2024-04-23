import React, {useState, useEffect} from 'react';
import Card from "../Card/Card";
import Pagination from '../Pagination/Pagination';
import axios from "axios";
import style from "./style.module.scss";



const Main =()=>{
    const[search, setSearch]=useState("");
    const [bookData,setBookData]=useState([]);
    const [totalBooks,setTotalBooks]=useState();
    const [currentPage, setCurrentPage]= useState();
    const [booksPerPage, setBooksPerPage]=useState(7);
     



 
const lastBookIndex=currentPage*booksPerPage;
const firstBookIndex=lastBookIndex - booksPerPage;
const currentBooks=bookData.slice(firstBookIndex, lastBookIndex);
const startIndex = (currentPage - 1) * booksPerPage;

    const handleBooksPerPageChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setBooksPerPage(selectedValue);
        console.log(selectedValue);
        setCurrentPage(1);
            };

       const searchBook = (evt) => {
        const searchText = evt.target.value; 
        const startIndex = (currentPage - 1) * booksPerPage; 
    
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyC67QiTZW4v9H874NsrUPxZGB-z1k-ZBkk&startIndex=${startIndex}&maxResults=${booksPerPage}`)
            .then(res => {
                setBookData(res.data.items);
                setTotalBooks(res.data.totalItems);
                setCurrentPage(1);
                console.log(res)
                
                })
            .catch(err => {
                console.log(err);
            });
    }

    const handleSearchClick = (evt) => {
        const startIndex = (currentPage - 1) * booksPerPage; 
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyC67QiTZW4v9H874NsrUPxZGB-z1k-ZBkk&startIndex=${startIndex}&maxResults=${booksPerPage}`
                )
                .then(res => {
                    setBookData(res.data.items);
                    setTotalBooks(res.data.totalItems);
                    setCurrentPage(1);
                    console.log(res)
                    
                    })
                .catch((err) => console.log(err));
                setCurrentPage(1);
        };


            const paginate = (pageNumber, evt)=>{
            evt.preventDefault();
            setCurrentPage(pageNumber);
            console.log("paginate");
        }  

            
          
    return(
        <>
        <div className={style.header}>
            <div className={style.row1}>
                <h1>Books are the plane, and the train, and the road. They are the destination, and the journey.  <br/> They are home.</h1>
            </div>
            <div className={style.row2}>
                <h2>Find your book here</h2>
                <div className={style.search}>
                    <input type="text" placeholder="Enter the book you are looking for" value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchBook}/>
                    <button type="button" onClick={handleSearchClick}><i className="fas fa-search"></i></button>
                </div>
                <img src="/images/books1.png" alt="Books" />
                
            </div>
        </div>

        <div className={style.container}>
            
            {
                <Card book={currentBooks}/>
                }
</div>
<div className={style.paginationContainer}>
{
    <Pagination 
    booksPerPage={booksPerPage}
    totalBooks={totalBooks}
    paginate={paginate}
    handleBooksPerPageChange={handleBooksPerPageChange}
    />
}
            </div>

        </>
    )
}

export default Main;
