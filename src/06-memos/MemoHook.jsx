
import React, { memo, useMemo } from 'react'
import { Smaill } from '../components/Smaill'
import { useCounter } from '../hooks'

const heavyStuff = ( iterationNumber = 10 ) => {
  for ( let i = 0 ; i < iterationNumber; i++ ){
    console.log('ITEARION')
  }
  return `iteraciones realizadas: ${ iterationNumber }  `
}


export const MemoHook = () => {
     const { counter, handleIncremet } = useCounter( 150 )
   const memorizedValue = useMemo(() => heavyStuff( counter ), [counter])
  return (
    <>
        <h2> Memorize </h2>

        <h1> Counter: <small> { counter } </small> </h1>
        <hr />

        <h4> { memorizedValue } </h4>

        <button className='btn btn-primary' onClick={ handleIncremet } > +1 </button>
    </>
  )
}
