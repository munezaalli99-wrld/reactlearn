import React from 'react';

function InputName() {
    let [name, setName] = React.useState("");

    return (
        <>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h1>Hola, {name}!</h1>
        </>
    )
}

export default InputName;