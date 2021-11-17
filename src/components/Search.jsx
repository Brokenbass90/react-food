import React, {useState} from "react";

function Search ({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if(e.key === "Enter"){
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return <div className="row">
        <div className="input-field cpl s12">
            <input type="search" 
                id='search-field'
                 placeholder="Поиск" 
                 onKeyDown={handleKey}
                 onChange={(e) => setValue(e.target.value)}
                 value={value}
            />
            <button className="btn search-btn purple darken-4 butt" onClick={handleSubmit}>Поиск</button>
        </div>

    </div>

}

export {Search};