document.addEventListener("DOMContentLoaded", () => {
    const notificationContainer = document.getElementById("notification-container");

    // Simulated notifications (Replace with Firebase or API integration)
    const notifications = [
        { type: "success", message: "New donation received! 🎉" },
        { type: "info", message: "A volunteer just signed up! 🤝" },
        { type: "warning", message: "System maintenance scheduled at 12:00 AM 🛠️" }
    ];

    function displayNotification(type, message) {
        if (!notificationContainer) return;

        const notification = document.createElement("div");
        notification.className = `notification ${type}`;
        notification.innerHTML = `<span>${message}</span> <button class="close-btn">&times;</button>`;

        notificationContainer.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);

        // Close button functionality
        notification.querySelector(".close-btn").addEventListener("click", () => {
            notification.remove();
        });
    }

    // Load notifications dynamically (Replace this with real-time event listeners)
    notifications.forEach((notif, index) => {
        setTimeout(() => {
            displayNotification(notif.type, notif.message);
        }, index * 3000);
    });
});
