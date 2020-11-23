import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { rm_post, add_post } from '../redux/actionType';
import AddPost from './AddPost';
import Post from './Post';

export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)

    const removePost = (id) => dispatch({type: rm_post, payload: id});
    const addPost = (post) => dispatch({type: add_post, payload: post});
    const showPosts = () => posts.map(post => (<Post title={post.title} key={post.id} id={post.id} body={post.body} remove={removePost}/>))

    return (
        <div>
            <h1>Post List</h1>
            <AddPost addPost={addPost}/>
            {showPosts()}
        </div>
    )
}
