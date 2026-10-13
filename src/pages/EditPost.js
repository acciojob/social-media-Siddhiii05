
import React, { useState } from 'react';

const EditPost = (props ) => {
    const { posts, setPosts } = props;
    const postId = props.match.params.postId;

    const post = posts.find(
        post => post.id === Number(postId)
    );

    const [title, setTitle] = useState(post ? post.title : '');
    const [content, setContent] = useState(post ? post.content : '');

    if (!post) {
        return <p>Post not found</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === Number(postId)
                    ? { ...post, title: title, content: content }
                    : post
            )
        );

        props.history.push(`/posts/${postId}`);
    };

    return (
        <div>
            <h1>Edit Post</h1>

            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    id="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Content</label>
                <textarea
                    id="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditPost;
