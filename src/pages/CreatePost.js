import React, {useState} from 'react';

const CreatePost = ({setPosts}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('John');
    const [content, setContent] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit clicked!");
    console.log("Title:", title);
    console.log("Content:", content);

    if (title.trim() !== "" && content.trim() !== "") {
        const newPost = {
            id: Date.now(),
            title,
            author,
            content
        };

        console.log("New post:", newPost);

        setPosts(prevPosts => [...prevPosts, newPost]);

        setTitle('');
        setAuthor('John');
        setContent('');
    } else {
        alert("Title and content are required!");
    }
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
