import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputref = useRef();

    const onClick = () => {
        inputref.current.select();
    }

    return (
        <>
            <div className='container'>

                <h2> Focus Screen </h2>
                <hr />
                <input ref={ inputref } type='text' placeholder='Ingrese su Nombre' className='form-control' />
                <button className='btn btn-primary mt-2' onClick={ onClick } > Set Focus</button>
            </div>
        </>
    )
}
