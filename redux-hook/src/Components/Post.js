import React from 'react'

export default function Post({title, id, body, remove}) {
    return (
        <div>
            <button onClick={() => remove(id)}>delete</button>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
