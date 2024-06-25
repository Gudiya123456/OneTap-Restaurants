import React from 'react'

export default function Index({ message }) {

    console.log(message)
    return (
        <div>

            <h1>{message[0].title}</h1>
            <b>{message[0].message}</b>
        </div>
    )
}
