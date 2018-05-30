
const bigImage = document.querySelector('#bigImage');
const imageList = document.querySelectorAll('.image');


imageList.forEach((img) => {
  img.addEventListener('click', () => {
    bigImage.src = img.src;
  });
});
// function btnClick() {
//   const elem = document.querySelector('i');
//   elem.classList.remove('fa-heart-o');
//   elem.classList.add('fa-heart');
// }
// console.log(window.location.href.split('/')[window.location.href.split('/').length-1].split('#')[0]);
