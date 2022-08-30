import React from 'react';

const Fruit=(props)=>{
    return(
        <>
    <div className='cards'>
        <h1>{props.title}</h1>
        <img src={props.imgsrc} alt='orange'/>
        <p>{props.desc} </p>
        <button>{props.btn}</button>
        <hr/>
    </div>
         </>
    )
}
export default Fruit; 