// Firebase Admin Authentication Logic

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const logoutBtn = document.getElementById("logout-btn");
    
    // Firebase authentication state observer
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Admin logged in: ", user.email);
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            console.log("No admin logged in");
        }
    });
    
    // Admin Login
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    console.log("Login successful", userCredential.user);
                })
                .catch(error => {
                    console.error("Login failed: ", error.message);
                    alert("Authentication Failed: " + error.message);
                });
        });
    }
    
    // Admin Logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            firebase.auth().signOut()
                .then(() => {
                    console.log("Admin logged out");
                    window.location.href = "index.html"; // Redirect to login page
                })
                .catch(error => {
                    console.error("Logout failed: ", error.message);
                });
        });
    }
});