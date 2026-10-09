import { useState } from 'react';

 function Btn(){  
   const [count, setCount] = useState(0);
   return(
    <>
    <h1>Value: {count}</h1>
    <button onClick ={() => setCount(count - 1)}>-</button>
    <button onClick ={() => setCount(count + 1)}>+</button>
    </>
   )
    }
 export default Btn;