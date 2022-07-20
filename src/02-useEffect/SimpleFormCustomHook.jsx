import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const SimpleFormCustom = () => {

    const { formState, handleInputChange, username, email, password, handleResetInput } = useForm({
        username: '',
        email: '',
        password : ''
    });


    return (
        <>
            <h2> Formulario Simple </h2>
            <hr />
            <input
                className='form-control'
                type='text'
                placeholder='Username'
                name='username'
                value={username}
                onChange={handleInputChange}
            />
            <input
                className='form-control mt-2'
                type='email'
                placeholder='email@correo.com'
                name='email'
                value={email}
                onChange={handleInputChange}
            />
            <input
                className='form-control mt-2'
                type='password'
                placeholder='********'
                name='password'
                value={password}
                onChange={handleInputChange}
            />

            <button className='mt-2 btn btn-primary' onClick={handleResetInput}> Borrar </button>

        </>
    )
}
