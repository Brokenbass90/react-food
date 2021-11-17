import React, {useState, useEffect} from 'react'; 
import {useParams} from 'react-router-dom';
import {getFilterCategory} from '../api';
import {Preloader} from '../components/Preloader';
import {MealList} from '../components/MealList';

function Category(){
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilterCategory(name).then(data => setMeals(data.meals));
    }, [name])

    return (
        <>
        
            {
                
            !meals.length ? (<Preloader /> 
            ) : (
                <MealList meals={meals} />)
            }
                
        </>
    )
}

export {Category}