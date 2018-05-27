const select = (element) => {
  return document.querySelector(element);
};

let elementList = [];
let priceElements = [];
let sizeElements = [];
let locationElements = [];

const elements = {
  price: {
    low: select('#p1'),
    mid: select('#p2'),
    high: select('#p3'),
  },
  size: {
    xLarge: select('#s4'),
    large: select('#s3'),
    medium: select('#s2'),
    small: select('#s1'),
  },
  location: {
    north: select('#l1'),
    gaza: select('#l2'),
    middle: select('#l3'),
    khan: select('#l4'),
    rafah: select('#l5'),
  },
  submit: select('#submit'),
  listener(element) {
    element.addEventListener('change', () => {

      if (element.checked && !priceElements.includes(element.id) && element.id.startsWith('p')) priceElements = priceElements.concat(element.id);
      else if (!element.checked && priceElements.includes(element.id) && element.id.startsWith('p')) priceElements.splice(priceElements.indexOf(element.id), 1);

      else if (element.checked && !sizeElements.includes(element.id) && element.id.startsWith('s')) sizeElements = sizeElements.concat(element.id);
      else if (!element.checked && sizeElements.includes(element.id) && element.id.startsWith('s')) sizeElements.splice(sizeElements.indexOf(element.id), 1);

      else if (element.checked && !locationElements.includes(element.id) && element.id.startsWith('l')) locationElements = locationElements.concat(element.id);
      else if (!element.checked && locationElements.includes(element.id) && element.id.startsWith('l')) locationElements.splice(locationElements.indexOf(element.id), 1);

      const priceString = priceElements.join(',');
      const sizeString = sizeElements.join(',');
      const locationString = locationElements.join(',');

      elementList = [];
      elementList = elementList.concat(priceString).concat(sizeString).concat(locationString).filter(ele => ele !== '');
      const url = elementList.join('&');
      const pathName = location.pathname.split('/').filter((e) => {
        return e !== '';
      });

      let endpoint
      const filteredPath = pathName[2];
      if (!filteredPath) endpoint = url;
      else if (filteredPath.includes(url)) endpoint = filteredPath;
      else endpoint = `${filteredPath}&${url}`;

      fetch(endpoint, {
        method: 'GET',
      })
        .then((res) => {
          window.location = res.url;
          console.log(location.pathname.includes('p1'));
          console.log(res.url);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};



window.onload = () => {
  let nodeList = document.querySelectorAll('.box')

  nodeList.forEach((element) => {
    if(location.pathname.includes(element.id)) element.checked = true;
  })


}
