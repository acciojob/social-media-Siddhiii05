import React, { useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    const handleRefresh = () => {
        setNotifications([
            "John liked your post.",
            "Emma commented on your post.",
            "Alex started following you."
        ]);
    };
    return (
        <div>
            <h1>Notifications</h1>

            <section className="notificationsList">
                <div>
                    {notifications.map((notification, index) => (
                        <p key={index}>{notification}</p>
                    ))}
                </div>
            </section>

            <button className="button" onClick={handleRefresh}>
                Refresh Notifications
            </button>
        </div>
    );
};

export default Notifications;
