import axios from "axios";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import history from '../history.js';

const Delete = (props) => {

    //Uses a react hook to set and store state
    const [values, setValues] = useState({
        id: '',
    })

    /**
     * Handles the ID input field and updates the ID state
     * @param {handleIdInputChange}  handler - ID input field
     */
    const handleIdInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            id: event.target.value,
        }));
    };

    //This will handle the deletion of Recipes from the Database
    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:5000/api/recipes/${values.id}`, { params: { id: values.id } })
        .then(res => {
            console.log(res);
            console.log(res.data.json);
            history.push('/')
            window.location.reload();
        })
        .catch(res => console.log('error', res))
    }

    return(
        <div className="recipes">
            <form className="form" onSubmit={handleDelete}>
                <label>
                    Confirm ID from URL:
                </label>
                <input 
                    type="number" 
                    name="ID" 
                    placeholder="Type ID to confirm"
                    required
                    value={values.id}
                    onChange={handleIdInputChange}
                />
                <fieldset>
                    <button type="submit" className="submitButton">Submit</button>
                    <Link to="/">
                        <button className="cancel">Cancel</button>
                    </Link>
                </fieldset>
            </form>
        </div>
    );
}

export default withRouter(Delete)