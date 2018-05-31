
// this function imports all parameters from the file filter_elements.js

(function listen(price, size, location, listener) {
  listener(price.low);
  listener(price.mid);
  listener(price.high);

  listener(size.xLarge);
  listener(size.large);
  listener(size.medium);
  listener(size.small);

  listener(location.north);
  listener(location.gaza);
  listener(location.middle);
  listener(location.khan);
  listener(location.rafah);
}(elements.price, elements.size, elements.location, listener))
