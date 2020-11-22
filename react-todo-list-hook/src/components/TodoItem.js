import React from 'react'

export default function TodoItem({title, id, remove}) {    
    return (
        <div>
            <h5>todo: </h5>
             <span>{title}</span><button onClick={() => remove(id)}>delete</button>
        </div>
    )
}
