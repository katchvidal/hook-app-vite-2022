import React, { memo } from 'react'

export const ShowIncrements = memo(({ increment }) => {
    console.log('renderizado again')
  return (
  <>
  <button className='btn btn-primary' onClick={() => increment(5)}> Increment </button>
  </>
  )
}
)