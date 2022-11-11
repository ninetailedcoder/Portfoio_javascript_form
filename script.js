const username = document.getElementById("Username");
const password = document.getElementById("Password");
const password2 = document.getElementById("Confirm Password");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function checkUsername() {
    if (username.value===''){
        showError(username, 'Username is required')
    }else { showSuccess(username)
    }
}

function checkPassword(){
    if (password.value === "") {
      showError(password, "Password is required");
    } else {
      showSuccess(password);
    }
  }
  
  function checkConfirmPassword(){
    if (password2.value === "") {
      showError(password2, "Please confirm the password");
    } else {
      showSuccess(password2);
    }
  }

  function checkPasswordsMatch() {
    if (password.value !== password2.value) {
      showError(password2, "Passwords do not match");
    }
  }

  const form = document.getElementById("form");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    checkUsername();
    checkPassword();
    checkPasswordsMatch();
    checkConfirmPassword();
  });