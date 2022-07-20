import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'kyocera',
        email: 'kia@correo.com'
    })

    const { email, username } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    };


    useEffect(() => {
        console.log('useEffect called')
    }, [  ])
    
    useEffect(() => {
        console.log('email changed use effect')
    }, [  email ])
    

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
    {
        ( username === 'kyocera' ? <Message /> : null )
    }
        </>
    )
}
