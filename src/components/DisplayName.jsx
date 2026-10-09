import React from 'react';
import  { useState } from 'react';
 
function DisplayName() {

    const [name,setName] = useState("");
    return (
        <>
            <input style={{marginRight: "10px"}}
                type="text" 
                placeholder="Enter your name"
                value={name}   
            />
        <button onClick={() =>setName(name)}>Display</button>
        <h1>I am {name}</h1>
        </>
    )
}

export default DisplayName;

                