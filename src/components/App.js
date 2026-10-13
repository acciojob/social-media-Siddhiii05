import React, {useState, useEffect} from "react";
import './../styles/App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home.js';
import Users from "../pages/Users.js";
import UserPosts from "../pages/UserPosts.js";
import PostDetails from "../pages/PostDetails.js";
import CreatePost from '../pages/CreatePost';
import EditPost from "../pages/EditPost.js";
import Notifications from "../pages/Notifications.js";

const App = () => {
  const initialPosts = [
    { id: 1, title: "My first post", author: "John", content: "Hello GenZ!" },
    { id: 2, title: "Enjoying my day", author: "Emma", content: "Having a great day!" },
    { id: 3, title: "Learning React", author: "Alex", content: "React is fun!" }
  ];
  
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');

    return savedPosts
      ? JSON.parse(savedPosts)
      : initialPosts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="App">
      <h1>GenZ</h1>

      <nav>
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/create-post">Create Post</Link>
      </nav>  

      <Switch>
        <Route exact path="/" render={() => <Home posts={posts} />} />
        <Route exact path='/users' component={Users}/>
        <Route exact path='/users/:userId'  render={(props) => <UserPosts {...props} posts={posts} />}/> 
        <Route exact path="/create-post" render={() => <CreatePost setPosts={setPosts} />} />
        <Route exact path="/posts/:postId/edit" render={(props) => <EditPost {...props} posts={posts} setPosts={setPosts}/>} />
        <Route exact path="/posts/:postId" render={(props) => <PostDetails {...props} posts={posts} />}/>
        <Route exact path='/notifications' component={Notifications}/>
      </Switch>
    </div>
  )
}

export default App
