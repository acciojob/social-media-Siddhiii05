import React, {useState} from 'react';

const CreatePost = ({setPosts}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('John');
    const [content, setContent] = useState('');


const handleSubmit = (e) => {
  e.preventDefault();

  if (!title.trim() || !content.trim()) {
    return;
  }

  const newPost = {
    id: Date.now(),
    title: title.trim(),
    author,
    content: content.trim()
  };

  setPosts(prevPosts => [
    prevPosts[0],
    newPost,
    ...prevPosts.slice(1)
  ]);

  setTitle('');
  setAuthor('John');
  setContent('');
};


    return (
        <div>
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input id="postTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Author</label>
                <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="John">John</option>
                    <option value="Emma">Emma</option>
                    <option value="Alex">Alex</option>
                </select>

                <label>Content</label>
                <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

                <button type="submit" >Add Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
