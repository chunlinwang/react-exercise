import React, { Component } from 'react'
import NvPost from './NvPost/NvPost'
import PostModale from './PostModale/PostModale'
import './Blog.css'
import Axios from 'axios'
import Post from './Post/Post'

class Blog extends Component {

    state = {
        posts: [],
        users: [],
        selectPost: null,
    }

    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
            const posts =  result.data.slice(0, 8);
            const userParam = posts.reduce((userIds, post) => {
                const user = 'id='+post.userId
                if (!userIds.includes(user)) {
                    userIds.push(user);
                }

                return userIds;
            }, []);

            const userParams = userParam.join('&')

            Axios.get("https://jsonplaceholder.typicode.com/users?"+userParams).then(res => {
                const users = res.data.reduce((users, user) => {
                    users[user.id] = user;

                    return users;
                }, []);

                this.setState({posts: posts, users: users});
            }).catch((err) => [])
        }).catch((err) => []);
    }    

    select = post => {
        this.setState({selectPost: post});
    }
    
    initSelectedPost = () => {
        this.setState({selectPost: null});
    }
    render () {

        const posts = this.state.posts.map((post, key) => (
            <Post key={key} title={post.title} 
                author={this.state.users[post.userId]}
                clicked={() => this.select(post)}
            />
        ))

        return (
            <div>
                <section>
                <NvPost />
                </section>
                <h2 className="text-center my-5">Choisissez un post ...</h2>
                <PostModale 
                    post={this.state.selectPost} 
                    initSelectedPostId={() => this.initSelectedPost()} 
                />
                <section className="Posts">
                {posts}
                </section>

            </div>
        );
    }
}

export default Blog;