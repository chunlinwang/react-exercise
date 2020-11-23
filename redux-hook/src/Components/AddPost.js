import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

export default function AddPost({addPost}) {
    const initialState = {
        title: '',
        body: '',
    };
    const [state, setstate] = useState(initialState)
    const ds = useSelector(state => state)

    console.log(ds);

    const newPost = () => {
        const post = {
            title: state.title,
            body: state.body,
            id: uuidv4(),
            userId: uuidv4(),
        }
        addPost(post);
    } 

    return (
        <div >
            <input type="text" name="title" onChange={(e) => {setstate({...state, title: e.target.value})}}/>
            <input type="text" name="body"  onChange={(e) => {setstate({...state, body: e.target.value})}}/>
            <button onClick={() => newPost()}>Add post</button>
        </div>
    )
}
