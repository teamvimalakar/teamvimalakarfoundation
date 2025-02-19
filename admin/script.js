document.addEventListener("DOMContentLoaded", function () {
    checkAdminAuth(); // Ensure admin is authenticated
    loadDashboardStats(); // Fetch and display stats
    loadRecentActivities(); // Fetch and display recent activities

    // Logout function
    document.getElementById("logoutBtn").addEventListener("click", function () {
        adminLogout();
    });
});

// Load dashboard statistics from Firebase
function loadDashboardStats() {
    const statsRef = database.ref("stats");
    statsRef.once("value", (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            document.getElementById("totalCamps").textContent = data.totalCamps || 0;
            document.getElementById("totalBeneficiaries").textContent = data.totalBeneficiaries || 0;
            document.getElementById("totalVolunteers").textContent = data.totalVolunteers || 0;
        }
    });
}

// Load recent activities
function loadRecentActivities() {
    const activitiesRef = database.ref("recentActivities").limitToLast(5);
    activitiesRef.once("value", (snapshot) => {
        const activityList = document.getElementById("recentActivities");
        activityList.innerHTML = "";

        snapshot.forEach((childSnapshot) => {
            const activity = childSnapshot.val();
            const li = document.createElement("li");
            li.textContent = `${activity.timestamp} - ${activity.message}`;
            activityList.appendChild(li);
        });
    });
}

// Logout admin
function adminLogout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
    }).catch((error) => {
        console.error("Logout failed: ", error);
    });
}