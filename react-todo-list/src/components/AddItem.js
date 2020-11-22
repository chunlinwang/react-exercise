import React from 'react'

export default function AddItem({addItemHandle}) {
    const add = (event) => {
       if (event.target.value && 13 === event.charCode) {
           addItemHandle(event.target.value);
           event.target.value="";
       }
    }

    return (
        <>
          <input type="text" onKeyPress={add}/>   
        </>
    )
}

