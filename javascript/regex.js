// const form = document.querySelector("#form");
// const phone = document.querySelector(".phone");
// const password = document.querySelector("#password");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     const phoneNo = phone.value;
//     const pattern = /\d{3}-\d{7}/;

//     const isValid = pattern.test(phoneNo);
//     if(isValid == true){
//         alert("success");
//     }
//         else{
//             alert("failure");
//         }
//     }

//     const passWord = password.value;
//     const pattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
//     const isValid = pattern.test(passWord);
//     if (isValid == true){
//         alert ("success");

//     }
//     else{
//         alert("For Strong Password use uppercase, lowercase, number, special character)")
//     }
// );

const form = document.querySelector("#form");
const phone = document.querySelector(".phone");
const password = document.querySelector("#password");

form.addEventListener("submit", function(event){
    event.preventDefault();

    // Phone validation
    const phoneNo = phone.value;
    const phonePattern = /\d{3}-\d{7}/;
    const isPhoneValid = phonePattern.test(phoneNo);

    if(isPhoneValid){
        alert("Phone success");
    } else {
        alert("Phone failure");
        return; // stop here if phone fails
    }

    // Password validation
    const passWord = password.value;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const isPassValid = passPattern.test(passWord);

    if(isPassValid){
        alert("Password success");
    } else {
        alert("For Strong Password use uppercase, lowercase, number, special character");
    }
});
