import { useState } from "react";


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const handleIncremet = (  ) => {
        setCounter( counter + 1 )
    };

    const handleDecremet = ( ) => {
        setCounter( counter - 1 )
    };

    const handleIncremetByAmount = ( value = 1 ) => {
        setCounter( counter + value )
    }
    const handleReset = (  ) => {
        setCounter( initialValue )
    }

    return {
        counter,
        setCounter,
        handleIncremet,
        handleDecremet,
        handleIncremetByAmount,
        handleReset
    };
}
