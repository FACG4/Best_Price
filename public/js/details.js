
const bigImage = document.querySelector('#bigImage');
const imageList = document.querySelectorAll('.image');


imageList.forEach((img) => {
  img.addEventListener('click', () => {
    bigImage.src = img.src;
  });
});
