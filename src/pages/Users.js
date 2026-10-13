import React from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div>
        <h1>Users</h1>
        <ul>
            <li><Link to="/users/1">John</Link></li>
            <li><Link to="/users/2">Emma</Link></li>
            <li><Link to="/users/3">Alex</Link></li>
        </ul>
    </div>
  )
}

export default Users