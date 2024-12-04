import React from 'react'

export default function Button(props) {
    const {text , func} = props
    return (
        <button onClick={func} className='px-8 mx-auto py-5 mt-6 rounded-lg bg-blue-500 text-white font-semibold blueShadow duration-200'>
           <p>{text}</p>
        </button>
    )
}
