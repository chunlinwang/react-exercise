import React from 'react'

export default function AddItem({addItem}) {
    const add = (e) => {
        if (e.target.value !== '' && 13 === e.charCode) {
            addItem({title: e.target.value});
            e.target.value = '';
        }
    }
    return (
        <div>
            <input type="text" onKeyPress={(e) => add(e)}/>
        </div>
    )
}
