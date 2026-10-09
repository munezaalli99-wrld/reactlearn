import react from 'react';
import { useState } from 'react';
import './ChangeName.css'

function ChangeName() {
    const [name,setName] = useState('Alliance');
    return (
        <div>
            <h1 className="name">My name is: {name}</h1>
            <button className = "btn" onClick={() => setName('Munezero')}>Change Name</button>
        </div>
    )
}

export default ChangeName;
    