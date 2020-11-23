import {add_post, rm_post} from './actionType';

export const addPost = (payload) => ({type: add_post, payload: payload}) 
export const rmPost = (payload) => ({type: rm_post, payload: payload}) 