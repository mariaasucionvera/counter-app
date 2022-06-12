import React from 'react';
import { useState } from 'react';

const Counter = ()=> {
    const [num, setNum]= useState(0);
    const addNum = ()=>{setNum(num <= 19 ? num + 1: 20)};
    const restNum =()=>{setNum(num >= 1 ? num - 1: 0)};

    return (

        <div>
            <p className='counterName'>Counter 1</p>
            <button className='add' onClick={addNum}>+</button>
            <p className='num'>{num}</p>
            <button className='rest'onClick={restNum}>-</button>
        </div>
        
    )


}
export default Counter
