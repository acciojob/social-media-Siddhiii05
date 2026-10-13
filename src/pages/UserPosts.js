import React from 'react';

const UserPosts = (props) => {
    const userId = props.match.params.userId;
    const posts = props.posts;

    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Emma" },
        { id: 3, name: "Alex" }
    ];

    const selectedUser = users.find(
        user => user.id === Number(userId)
    );
console.log("All posts:", posts);
console.log("Selected user:", selectedUser);
    const userPosts = selectedUser
        ? posts.filter(post => post.author === selectedUser.name)
        : [];
console.log("Filtered user posts:", userPosts);
    return (
        <div>
            <h1>User Posts</h1>
            <p>Selected User ID: {userId}</p>

            {selectedUser ? (
                <h2>{selectedUser.name}</h2>
            ) : (
                <p>User not found</p>
            )}

            {selectedUser && (
                <ul>
                    {userPosts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserPosts;
