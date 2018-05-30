const firstName = document.querySelector('#fname');
const firstNameIcon = document.querySelector('#firstNameIcon');
const lastName = document.querySelector('#lname');
const lastNameIcon = document.querySelector('#lastNameIcon');
const userName = document.querySelector('#uname');
const userNameIcon = document.querySelector('#userNameIcon');
const email = document.querySelector('#email');
const emailIcon = document.querySelector('#emailIcon');
const password = document.querySelector('#password');
const passwordIcon = document.querySelector('#passwordIcon');
const errorMessage = document.querySelector('#formError');
const submit = document.querySelector('#btn1');
const isLetters = value => RegExp('^[a-zA-Z ]*$').test(value);
const isPasswordStrong = value => value.length === 0 || RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(value);
const validateEmail = (value) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};
createErrorEventListener = (element, errorCondition, errorIcon, errorMsg) => {
  element.addEventListener('blur', (event) => {
    const value = event.target.value;
    if (errorCondition(value)) {
      errorIcon.style.visibility = 'hidden';
      errorMessage.textContent = '';
    } else {
      errorIcon.style.visibility = 'visible';
      errorMessage.textContent = errorMsg;
    }
  });
};
createErrorEventListener(firstName, isLetters, firstNameIcon, 'UserNames cannot contain numbers or special characters');
createErrorEventListener(userName, isLetters, userNameIcon, 'Names cannot contain numbers or special characters');
createErrorEventListener(lastName, isLetters, lastNameIcon, 'Names cannot contain numbers or special characters');
createErrorEventListener(email, validateEmail, emailIcon, 'email cannot special characters');
createErrorEventListener(password, isPasswordStrong, passwordIcon, 'password not strong ');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  if (userName.value.length > 0
  && isLetters(userName.value)
  && firstName.value.length > 0
  && isLetters(firstName.value)
  && lastName.value.length > 0
  && isLetters(lastName.value)
  && password.value.length > 0
  && isPasswordStrong(password.value)
  && email.value.length > 0
  && validateEmail(email.value)
  ) {
    const data = JSON.stringify({
      uname: userName.value,
      fname: firstName.value,
      lname: lastName.value,
      email: email.value,
      password: password.value,
    });
    console.log(data, 'data from front end');
    const headers = {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: data,
    };

    fetch('/signup', headers)
      .then(res => res.json())
      .then((res) => {
        if (res.error) {
          console.log(res.error);
          errorMessage.textContent = res.message;
        } else if (res.success) {
          window.location.pathname = '/login';
        }
      })
      .catch((err) => {
        errorMessage.textContent = 'There has been an error submitting your form. Please try again later.';
      });
  } else {
    errorMessage.textContent = 'Please complete the form before submitting';
  }
});
