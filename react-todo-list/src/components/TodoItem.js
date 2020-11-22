import React from 'react'

export default function TodoItem({text, index, deleteHandle}) {
    const deleteItem = () => deleteHandle(index)
     
    return (
        <li>
            <div>{text} <button onClick={deleteItem}> *delete* </button></div>
        </li>
    )
}
