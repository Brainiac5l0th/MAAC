import React from 'react'

const TextInput = ({ type, placeholder }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className='textInput' />
        </>
    )
}

export default TextInput