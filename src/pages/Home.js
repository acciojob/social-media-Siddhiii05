import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Home = ({posts}) => {
  const [reactions, setReactions] = useState({});

  const handleReaction = (postId, reaction) => {
    setReactions(prev => ({
      ...prev,
      [`${postId}-${reaction}`]: (prev[`${postId}-${reaction}`] || 0) + 1
    }))
  }
  console.log("Posts received:", posts);

  return (
    <div className='posts-list'>    
      {posts.map((post) => (
          <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>Author: {post.author}</p>
              <p>{post.content}</p>


              <button onClick={() => handleReaction(post.id, 'Like')}>
                Like: {reactions[`${post.id}-Like`] || 0}
              </button>
              <button onClick={() => handleReaction(post.id, 'Love')}>
                Love: {reactions[`${post.id}-Love`] || 0}
              </button>
              <button onClick={() => handleReaction(post.id, 'Laugh')}>
                Laugh: {reactions[`${post.id}-Laugh`] || 0}
              </button>
              <button onClick={() => handleReaction(post.id, 'Wow')}>
                Wow: {reactions[`${post.id}-Wow`] || 0}
              </button>
              <button onClick={() => handleReaction(post.id, 'Angry')}>
                Angry: 0
              </button>

              <Link className="button" to={`/posts/${post.id}`}>View Post</Link>
          </div>
      ))}
    </div>
  )
}

export default Home