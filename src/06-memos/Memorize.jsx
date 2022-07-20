
import React, { memo } from 'react'
import { Smaill } from '../components/Smaill'
import { useCounter } from '../hooks'

export const Memorize = () => {
     const { counter, handleIncremet } = useCounter()

  return (
    <>
        <h2> Memorize </h2>

        <h1> Counter: <Smaill counter={ counter } /> </h1>
        <hr />

        <button className='btn btn-primary' onClick={ handleIncremet } > +1 </button>
    </>
  )
}
