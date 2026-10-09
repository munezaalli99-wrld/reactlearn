import React from 'react';
import { useState } from 'react'

const Form = () =>{
    const[formData,setFormData] = useState({
        username:'',
        email:'',
        password:'',
        agreeToTerms:'',
        gender:''

    });
    const handleInputChange = (e) =>{
        const {name,value,type,checked} = e.target;
        setFormData({
            ...formData,
            [name]:type === 'checkbox'?checked : value

        });
    
    }
const handleSubmit = (e) =>{
    e.preventDefault();
     console.log("Form submitted with data:",formData);
    return(
        <div>
            <h2>Form submitted with data:",{formData}</h2>
        </div>
    )
}
return(
    <form onSubmit={handleSubmit}>
        <div>

            <label>Username:</label>
            <input type="text" name='username' value={formData.username} onChange={handleInputChange} />
        </div>
        <div>
           <label>Email:</label>
            <input type='email' name='email' value={formData.email} onChange={handleInputChange} />
            
        </div>
        <div>
        <label>Password:</label>
        <input type='password' name='password' value={formData.password} onChange={handleInputChange}/>
        </div>
        <div>
        <label>
        <input type='checkbox' name='agreeToTerms' value={formData.agreeToTerms} onChange={handleInputChange}/>
        Agree to the terms before continuing
        </label> 
        </div>
        <div>
            <label>
                Gender:
            </label>
            <select name='gender' value={formData.gender} onChange={handleInputChange}>
                <option value=''>Select</option>
                <option value='male'>Male</option>
                <option value='female'>female</option>
            </select>

        </div>
        {/* <button type='submit' onClick={handleSubmit}>Sign in</button> */}
        <button type='submit' value="Sign in" onClick={handleSubmit}>Sign in</button>
    </form>
);
};
export default Form;