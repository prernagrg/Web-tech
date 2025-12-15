
document.querySelector(".form").addEventListener("submit", function (event) {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    alert("Email: " + email + "\nPassword: " + password);
});
