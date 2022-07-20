import React, { useCallback } from 'react'
import { ShowIncrements } from '../components/ShowIncrements'
import { useCounter } from '../hooks'

export const CallbackHook = () => {
    const { counter, setCounter } = useCounter(10)
    const increment = useCallback(
      ( value ) => {
        setCounter( counter => counter + value  )
      },
      [],
    )
    
    return (
        <>
            <h2> Callback Hook: {counter} </h2>
            <hr />

            <ShowIncrements increment={increment} />
        </>
    )
}
