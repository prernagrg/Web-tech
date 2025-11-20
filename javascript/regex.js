const form = document.querySelector("#form");
const phone = document.querySelector(".phone");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const phoneNo = phone.value;
    const pattern = /\d{3}-\d{7}/;

    const isValid = pattern.test(phoneNo);
    if(isValid == true){
        alert("success");
    }
        else{
            alert("failure");
        }
    }
)