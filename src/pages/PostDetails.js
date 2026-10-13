import React from 'react';

import { Link } from 'react-router-dom';

const PostDetails = (props) => {
    const postId = props.match.params.postId;

    const posts = props.posts;

    const selectedPost = posts.find(post => post.id === Number(postId));

    if (!selectedPost) {
        return <p>Post not found</p>;
    }

    return (
        <div className="post">
            <h1>{selectedPost.title}</h1>
            <p>Author: {selectedPost.author}</p>
            <p>{selectedPost.content}</p>

            <Link to={`/posts/${postId}/edit`}>
                <button className="button">Edit</button>
            </Link>
        </div>
    );
};

export default PostDetails;
