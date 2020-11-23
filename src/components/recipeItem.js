import React from "react";
import { Link } from 'react-router-dom';

const Recipe = props => {

    return(
        <li>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.ingredients}</p>
                <Link to={`/recipe/update/${props.id}`}>
                    <button className="updatebutton">Update</button>
                </Link>
                <Link to={`/recipe/delete/${props.id}`}>
                    <button className="deletebutton">Delete</button>
                </Link>
        </li>
    )
}

export default Recipe