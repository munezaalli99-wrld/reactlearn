import React from 'react';
function Vote(){
    let age = 18;
    return(
        <>
        <h2>Can i vote?{age >= 18 ? "Yes" : "No"}</h2>
        </>
    )
}
export default Vote;