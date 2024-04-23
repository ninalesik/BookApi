import React, {useState} from 'react'
import style from "./style.module.scss";
import Modal from '../Modal/Modal';

const Card=({book})=>{
    const [show,setShow]=useState(false);
    const[bookItem, setBookItem] = useState();
        return(
        <>
{
        book.map((item)=>{
            let image=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let author=item.volumeInfo.authors;
            let title = item.volumeInfo.title
            

            if (image!=undefined){
                return(
<>
 <div className={style.card} onClick={()=>{setShow(true); setBookItem(item)}}>
            <img src={image} alt="book"/>
            <div className={style.bottom}>
                <h3 className={style.title}>Title: {title}</h3>
                <p className={style.author}>Author: {author}</p>
               
            </div>
        </div>
        <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
</>

            )
            }
            
        })
    }


       
        </>
    )
}



export default Card;