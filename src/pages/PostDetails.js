
import React from 'react';
import { Link } from 'react-router-dom';

const PostDetails = (props) => {
  const { posts } = props;
  const postId = Number(props.match.params.postId);

  const post = posts.find(item => item.id === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>Author: {post.author}</p>
      <p>{post.content}</p>

      <Link
        className="button"
        to={`/posts/${post.id}/edit`}
      >
        Edit
      </Link>
    </div>
  );
};

export default PostDetails;