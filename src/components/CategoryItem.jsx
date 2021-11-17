import { Link } from 'react-router-dom';
import React, {useState} from 'react';
function CategoryItem(props){
    const [description, setDescription] = useState(false);
    const handleDescription = () => {
        setDescription(true)
    }
    const removeDescription = () => {
        setDescription(false)
    }
    const {
        // idCategory, 
        strCategory, 
        strCategoryThumb, 
        strCategoryDescription 
    } = props;

    return (
         <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
                
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                {!description ? (<button className='min-btn' onClick={handleDescription}>&#9650;</button>
                ) : (
                    <button className='min-btn' onClick={removeDescription}>&#9660;</button>
                )}
                <p>{!description ? strCategoryDescription.slice(0, 60) + "..." : strCategoryDescription}</p>   
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn purple darken-4">Смотреть категорию</Link>
            </div>
      </div>
    )
}

export {CategoryItem}