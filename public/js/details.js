const image = document.querySelectorAll('.image');
console.log(image[0].currentSrc);

image.forEach((e) => {
  const imgList =e.src;
  console.log(imgList);
})
