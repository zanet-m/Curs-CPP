const firebaseConfig = {
    apiKey: "AIzaSyAwpNjRgXu4V_OhRYdQoOK1DD1Ia0g0tNU",
    authDomain: "cursuri-c688f.firebaseapp.com",
    projectId: "cursuri-c688f",
    storageBucket: "cursuri-c688f.appspot.com",
    messagingSenderId: "1039241928482",
    appId: "1:1039241928482:web:20cb294207177d66db8f7b"
  };

const postareBtn = document.getElementById('postare-btn');
const admin = "URVAPYWSIBgBYHNS242woP1Inqx2"   //Acesta este UID din meniul Autentificare din proiectul Cursuri din FireBase

firebase.initializeApp(firebaseConfig);

//referinta la serviciul de autentificare
const auth = firebase.auth();

//referinta la baza de date
const db = firebase.firestore();

//referinta la colectia teme din baza de date
const temeDb = db.collection("teme");

let user = null;



const yearElement = document.getElementById('year');

if (yearElement) {
    let date = new Date();

    yearElement.innerHTML = date.getFullYear() + " ©";
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function refresh() {
    window.location.reload();
}

function isAdmin() {
    if (user == null) {
        return false;
    }

    return admin == user.uid;

}

function formatareData(stamp){
    let data = new Date(stamp);
    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();

    let result = zi + " / " + luna + " / " + an;

    return result;

}

auth.onAuthStateChanged(function (fuser) {
    user = fuser;

    if (isAdmin() == true) {
        postareBtn.style.display = "block";
    }
    else {
        postareBtn.style.display = "none";
    }

    document.querySelector("body").style.display = "block";
    

});


