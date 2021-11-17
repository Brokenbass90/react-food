import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {getMealById} from '../api';
import {Preloader} from '../components/Preloader';


function Recipe(){
    const [recipe, setRecipe] = useState({});
    const {id} = useParams();
    const goBack = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id])
    return (
        <>
            <button className="btn purple darken-4 mb15" onClick={() => goBack(-1)}>Назад</button>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe">
                    <img className="img-recipe" src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Категория: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Страна: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ингредиенты</th>
                                <th>Количество</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if(key.includes('Ingredient') && recipe[key]){
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]   
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </tbody>

                    </table>

                    {recipe.strYoutube ? (
                        <div className="row video-block">
                            <h5 className="title-video">Видео рецепта</h5>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/> 
                            
                        </div>
                        
                        
                        ) : null}
                </div>
            )}
        </>
        
    )
}

export {Recipe};