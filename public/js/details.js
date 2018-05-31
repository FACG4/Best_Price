
const bigImage = document.querySelector('#bigImage');
const imageList = document.querySelectorAll('.image');
const heartIcon = document.querySelectorAll('#heartIcon');

// console.log(heartIcon);
imageList.forEach((img) => {
  img.addEventListener('click', () => {
    bigImage.src = img.src;
  });
});
