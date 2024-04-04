// get username from username URL query parameter

var urlParam = new URLSearchParams(window.location.search);
var username = urlParam.get('username');

var welcomeMessage = document.getElementById('welcomeMessage');

welcomeMessage.innerHTML = 'Hello ' + username + '! Welcome to the MVPs secure page.'

var logOut = document.getElementById('logOutBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});