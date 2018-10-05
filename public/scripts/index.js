// Shortcut to DOM elements
var signInButtonElement = document.getElementById('sign-in');

// Add event listener to the elements
signInButtonElement.addEventListener('click', signIn);

function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
        var token = result.credential.accessToken;
        var user = result.user;
        document.location.href = "home.html";
    }).catch(function(error){
        console.log(error)
    });

}