import React from "react"
const Farm = ({animal,crops,location}) => {
    return(
        <div>
            <h2>Farm deals with :</h2>
            Type of animals:{animal}<br/>
            crops:{crops}<br/>
            Location:{location}
        </div>
    )
}

export default Farm;