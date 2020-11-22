import React, { Component } from 'react'

import './PostModale.css'

class PostModale extends Component {

    render () {

        return (
            this.props.post ?
                (<div className="PostComplet">
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
            
                    <button className="btn btn-danger my-3 btnPost" onClick={this.props.initSelectedPostId}>Fermer</button>
                
                </div>) :
                null
            )
    }
}

export default PostModale;
