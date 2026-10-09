import React from 'react';
 function Hooks(){  
    const [name, setName] = React.useState("Alliance");
    return(
        <>
            <h1>Hola, {name}!</h1>
        </>
    )
 }
  export default Hooks;