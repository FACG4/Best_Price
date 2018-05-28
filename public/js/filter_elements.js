const select = element => document.querySelector(element);

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
};

window.onload = () => {
  const nodeList = document.querySelectorAll('.box')
  nodeList.forEach((element) => {
    if (location.pathname.includes(element.id)) {
      element.checked = true;
    } else element.checked = false;
  });
};

const path = location.pathname.split('/')[3];
let url;
const pathArray = path.split('&');
let elementList = [];
let priceElements = [];
let sizeElements = [];
let locationElements = [];
let priceString = '';
let sizeString = '';
let locationString = '';

if (path) {
  pathArray.forEach((ids) => {
    const pathEntries = ids.split(',');

    pathEntries.forEach((pathIds) => {
      if (pathIds.startsWith('p') && !priceElements.includes(pathIds)) priceElements = priceElements.concat(pathIds);
      else if (pathIds.startsWith('s') && !sizeElements.includes(pathIds)) sizeElements = sizeElements.concat(pathIds);
      else if (pathIds.startsWith('l') && !locationElements.includes(pathIds)) locationElements = locationElements.concat(pathIds);
    }); // end of nested forEach;
  }); // end of first forEach;
}

console.log('price', priceElements);
console.log('size', sizeElements);
console.log('loc', locationElements);

const listener = (element) => {
  element.addEventListener('change', () => {
    if (!path || path === undefined) {
      url = element.id;
    } else if (path) {
      console.log(element.id);
      if (element.id.startsWith('p') && priceElements.includes(element.id) && !element.checked) priceElements.splice(priceElements.indexOf(element.id), 1);
      if (element.id.startsWith('p') && !priceElements.includes(element.id) && element.checked) priceElements = priceElements.concat(element.id).sort();


      if (element.id.startsWith('s') && sizeElements.includes(element.id) && !element.checked) sizeElements.splice(sizeElements.indexOf(element.id), 1);
      if (element.id.startsWith('s') && !sizeElements.includes(element.id) && element.checked) sizeElements = sizeElements.concat(element.id).sort();


      if (element.id.startsWith('l') && locationElements.includes(element.id) && !element.checked) locationElements.splice(locationElements.indexOf(element.id), 1);
      if (element.id.startsWith('l') && !locationElements.includes(element.id) && element.checked) locationElements = locationElements.concat(element.id).sort();


      priceString = priceElements.join(',')
      sizeString = sizeElements.join(',')
      locationString = locationElements.join(',')

      url = elementList.concat(priceString).concat(sizeString).concat(locationString).filter(e => e !== '')
        .join('&');
    } // end of else statement;

    console.log('newprice', priceString);
    console.log('newsize', sizeString);
    console.log('newloc', locationString);
    console.log(url);


    fetch(url, {
      method: 'GET',
    })
      .then((res) => {
        window.location = res.url;
      })
      .catch((err) => {
        console.log(err); // add textContent to a div 'unautorized action' or something.
      });
  });
};
