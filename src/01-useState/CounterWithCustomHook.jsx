import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { counter,
        handleIncremet,
        handleIncremetByAmount,
        handleDecremet,
        handleReset
    } = useCounter(10)
    return (
        <>
            <h2> Counter With Custom Hook </h2>
            <h3> Counter: {counter} </h3>
            <button className='btn btn-primary' onClick={handleIncremet}> +1</button>
            <button className='btn btn-warning' onClick={handleReset}> Reset </button>
            <button className='btn btn-danger' onClick={handleDecremet} > - 1 </button>
            <button className='btn btn-success' onClick={() => handleIncremetByAmount(5)} > Increment +5 </button>
        </>
    )
}
