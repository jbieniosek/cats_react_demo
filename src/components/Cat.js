import React from 'react';
import './Cat.css'

const Cat = (props) => {
    console.log(props);
    return(
        <div>
            <img className="catpic" src={props.link} alt={props.name} />
            <span>{props.name}</span>
        </div>
    );
};

export default Cat;