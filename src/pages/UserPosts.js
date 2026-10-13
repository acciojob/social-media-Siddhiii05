
import React from 'react';

const UserPosts = (props) => {
  const userId = Number(props.match.params.userId);
  const posts = props.posts || [];

  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Emma' },
    { id: 3, name: 'Alex' }
  ];

  const selectedUser = users.find(user => user.id === userId);

  const userPosts = selectedUser
    ? posts.filter(
        post =>
          post.author?.trim().toLowerCase() ===
          selectedUser.name.toLowerCase()
      )
    : [];

  if (!selectedUser) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>User Posts</h1>
      <h2>{selectedUser.name}</h2>

      <div className="posts-list">
        {userPosts.length > 0 ? (
          userPosts.map(post => (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>Author: {post.author}</p>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts found for {selectedUser.name}.</p>
        )}
      </div>
    </div>
  );
};

export default UserPosts;
