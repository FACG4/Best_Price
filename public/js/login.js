
const password = document.querySelector('#password');
const errorMessage = document.querySelector('#formError');
const login_button = document.querySelector('#login_button');

login_button.addEventListener('click', (event) => {
  event.preventDefault();
  const data = JSON.stringify({
    username: username.value.trim(),
    password: password.value.trim(),
  });
  const headers = {
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'same-origin',
    method: 'POST',
    body: data,
  };

  fetch('/login', headers)
    .then(res => res.json())
    .then((res) => {
      console.log('hhhhhhhhhhhh', res);
      if (res.error) {
        console.log(res.error);
        errorMessage.textContent = res.message;
      } else {
        swal(`${'hello' + ' '}${res.user}`);
        function myFunc(arg) {
          window.location = '/';
        }
        setTimeout(myFunc, 1700);
      }
    })
    .catch((err) => {
      console.log(err);
      errorMessage.textContent = 'There has been an error submitting your form. Please try again later.';
    });
});
