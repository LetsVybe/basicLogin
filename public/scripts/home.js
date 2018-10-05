// Shortcut to DOM elements
var signInButtonElement = document.getElementById('sign-out');
var nameParagraph = document.getElementById("demo");

// Add event listener to the elements
signInButtonElement.addEventListener('click', signOut);


function signOut() {
    firebase.auth().signOut();
    document.location.href = "index.html";
}

function printName(){
    firebase.auth().onAuthStateChanged(function(){
        nameParagraph.innerText = firebase.auth().currentUser.displayName;
    })
};