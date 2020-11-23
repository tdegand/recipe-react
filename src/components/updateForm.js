import axios from 'axios';
import React, { useState }from 'react';
import { Link } from "react-router-dom";
import history from '../history';

const UpdateForm = () => {

    //Uses a react hook to update and store changes to state
    const [values, setValues] = useState({
        name: '',
        description: '',
        ingredient: '',
    });

    /**
     * Handles the Name input field and updates the name state
     * @param {handleNameChange}  handler - Name input field
     */
     const handleNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };
    /**
     * Handles the Description input field and updates the Description state
     * @param {handleDesChange}  handler - Description input field
     */
    const handleDesChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            description: event.target.value,
        }));
    };
    /**
     * Handles the ingredients input field and updates the ingredient state
     * @param {handleIngChange}  handler - ingredients input field
     */
    const handleIngChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            ingredient: event.target.value,
        }));
    };

    //Grabs the ID number from path and then updates the database based on ID number using the states of the inputs
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const path = window.location.pathname.split('/');
        const id = path[3];

        axios.put(`http://localhost:5000/api/recipes/${id}`, values)
        .then(res => {
            console.log(res);
            console.log(res.data.json);
            history.push('/');
            window.location.reload();
        })
        .catch(res => console.log('error', res))
    }

            return(
                <div className="recipes">
                    <form className="form" onSubmit={handleFormSubmit}>
                        <label>
                            Name: 
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            required
                            value={values.name}
                            onChange={handleNameChange}
                        />
                        <label>
                            Description:
                        </label>
                        <input 
                            type="text" 
                            name="description" 
                            placeholder="Description"
                            required
                            value={values.description}
                            onChange={handleDesChange}
                        />
                        <label>
                            Ingredients:
                        </label>
                        <input 
                            type="text" 
                            name="ingredients" 
                            placeholder="ingredients"
                            required
                            value={values.ingredient}
                            onChange={handleIngChange}
                        />
                        <fieldset>
                            <button type="submit" className="submitButton">Submit</button>
                            <Link to="/">
                                <button className="cancel">Cancel</button>
                            </Link>
                        </fieldset>
                    </form>
                </div>
            )
        
}

export default UpdateForm;