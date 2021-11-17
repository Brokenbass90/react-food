import {useNavigate} from 'react-router-dom';
import {Meal} from './Meal';
function MealList({meals}) {
    const navigate = useNavigate();
    // const goBack = () => {
    //     navigate('/');
    // }
    return (
        <>
            <button className="btn purple darken-4" onClick={() => navigate(-1)}>Назад</button>
            <div className="list">
                {meals.map(meal => (
                    <Meal key={meal.idMeal} {...meal} />
                ))}
            </div>
        </>
        
    )
}

export {MealList};