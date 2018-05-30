const username = document.querySelector('#username');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('#formError');
const login_button = document.querySelector('#login_button');

login_button.addEventListener('click', function(event){
  event.preventDefault();
  var data = JSON.stringify({
        username: username.value,
        password: password.value,
      })
      const headers = {
        headers: {
      'content-type': 'application/json'
        },
         credentials: 'same-origin',
          method: 'POST',
          body: data
        }

  fetch('/login', headers)
  .then(res => res.json())
  .then(res => {
    if (res.error){
      console.log(res.error);
      errorMessage.textContent = res.message;
    } else {
      
      window.location='/'
    }
  })
  .catch(err => {
    console.log(err);
    errorMessage.textContent = 'There has been an error submitting your form. Please try again later.';
  })

})
