// const username = document.querySelector('#username');
// const password = document.querySelector('#password');
// const errorMessage = document.querySelector('#formError');
//
// formSubmit.addEventListener('click', function(event){
//   event.preventdefult;
//   var data = JSON.stringify({
//       userName: username.value,
//       password: password.value,
//     })
//     const headers = {
//       headers: {
//         Accept: 'application/json, text/plain, /',
//         'Content-Type': 'application/json',
//         },
//         method: 'POST',
//         body: data
//       }
//
// fetch('/login', headers)
// .then(res => res.json())
// .then(res => {
//   // console.log(res);
//   if (res.error){
//     // console.log(res.error);
//     errorMessage.textContent = res.message;
//   } else if (res.success) {
//     window.location = '/';
//   }
// })
// .catch(err => {
//   console.log(err);
//   errorMessage.textContent = 'There has been an error submitting your form. Please try again later.';
// })
// } else {
// errorMessage.textContent = 'Please complete the form before submitting';
// }
// })
