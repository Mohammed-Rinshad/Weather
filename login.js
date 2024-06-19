let signupBtn = document.getElementById('signup-btn');
let loginBtn = document.getElementById('login-btn');
let loginUsername = document.getElementById('login-username');
let loginPassword = document.getElementById('login-password');
let signupUsername = document.getElementById('signup-username');
let signupPassword = document.getElementById('signup-password');
let signupEmail = document.getElementById('signup-email');
// let signupPhone = document.getElementById('signup-phone');
// let signupAddress = document.getElementById('signup-address');
let loginError = document.getElementById("login-error")
let signupError = document.getElementById('signup-error')

document.getElementById('showSignUp').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfBx7IK6n3j_K_0UrH8Q03DmaXN1A0rY8",
    authDomain: "login-weather-2af60.firebaseapp.com",
    databaseURL: "https://login-weather-2af60-default-rtdb.firebaseio.com",
    projectId: "login-weather-2af60",
    storageBucket: "login-weather-2af60.appspot.com",
    messagingSenderId: "620657765692",
    appId: "1:620657765692:web:a8fa84094e9bbac6458239"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const db = getDatabase();

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let dbRef = ref(db, 'signup/' + signupUsername.value);

    get(dbRef).then((snapshot) => {
        let existingData = snapshot.val();

        if (existingData) {
            // alert('Username already exists');
            signupError.style.display = "block"
        } else {
            set(dbRef, {
                username: signupUsername.value,
                email: signupEmail.value,
                password: signupPassword.value,
                // phoneNumber: signupPhone.value,
                // address: signupAddress.value
            })
            .then(() => {
                alert('SignUp successfully');
                window.location.href = 'weather.html'
            })
            .catch((error) => {
                alert('Unsuccessful: ' + error);
            });
        }
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let dbRef = ref(db, 'signup/' + loginUsername.value);

    get(dbRef).then((snapshot) => {
        let existingData = snapshot.val();

        if (existingData && existingData.password === loginPassword.value) {
            alert('Login successful');
            window.location.href = 'weather.html'
        } else {
            // alert('Login unsuccessful');
            loginError.style.display = 'block'
        }
    });
});
