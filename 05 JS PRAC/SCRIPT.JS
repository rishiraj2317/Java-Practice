let emailId = document.getElementById("email-id");
let errormsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

function checker() {

  icon.style.display = "inline-block";
  let email = emailId.value.trim();

  if(email=== ""){
    icon.style.display="none"
    emailId.style.border = "2px solid Pink";
   }else if(validateEmail(email)){
    icon.innerHTML = '<i class="fas fa-check-circle"></i>';
    icon.style.color = "#2ecc71"
    errormsg.style.display = "none";
    emailId.style.border = "2px solid #2ecc71";
   }else{
    icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    icon.style.color = "#e74c3c";
    errormsg.style.display = "block";
    errormsg.innerText = "Please enter a valid email address";
    emailId.style.border = "2px solid #e74c3c";
}

   }


 function validateEmail(email){

    let atIndex = email.indexOf("@");

    let dotIndex = email.lastIndexOf(".");

    if(
        atIndex  > 0 &&
        dotIndex > atIndex + 1 &&
        dotIndex < email.length - 2
    ){
       return true;
    }else{
        return false;
    }   

}