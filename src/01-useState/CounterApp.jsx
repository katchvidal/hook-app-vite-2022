
import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 10,
        counter3: 10,
    })

    const { counter1, counter2, counter3 } = state;

    const handleIncrementClick = () => {
        setCounter({
            ...state,
            counter3: counter3 + 1
        })
    }

    const handleDecrementClick = () => {
        setCounter({
            ...state,
            counter3: counter3 - 1
        })
    }

    const handleResetClick = () => {
        setCounter({
            ...state,
            counter3: 10
        })
    }

    return (
        <>
            <h2> Incrementar el Contador Numero 3 sin Modificar el estado de los demas </h2>
            <h2> Counter1: {counter1}</h2>
            <h2> Counter2: {counter2} </h2>
            <h2> Counter3: {counter3} </h2>
            <br />
            <button className='mr-1 btn btn-primary' onClick={handleIncrementClick}> Increment </button>
            <button className='mr-4 btn btn-danger' onClick={handleDecrementClick}> Decrement </button>
            <button className='mr-2 btn btn-warning' onClick={handleResetClick}> Reset </button>
            <hr />
        </>
    )
}
