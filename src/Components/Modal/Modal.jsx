import react from 'react';
import style from "./style.module.scss";

const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    const publishedYear = new Date(item.volumeInfo.publishedDate).getFullYear();

    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className={style.modal}>
                <div className={style.inner}>
                    <button className={style.close} onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className={style.box}>
                        <img src={thumbnail} alt="" />
                        <div className={style.info}>
                            <h1>Title: {item.volumeInfo.title}</h1>
                            <h3>Author: {item.volumeInfo.authors}</h3>
                            <h4>Publisher: {item.volumeInfo.publisher}</h4>
                            <p>Publishing year: {publishedYear}</p>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className={style.description}>{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;