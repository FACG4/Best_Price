const fs = require('fs');
const path = require('path');
const sql = {
  selectNoFilter: 'SELECT * FROM items;',
  buildCommand: fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString(),
};

const sqlBuilder = (command, params, table, ...range) => {
  let firstString = '';
  let priceString = '';
  let sizeString = '';
  let locationString = '';
  let queryString = '';

  if (range.length === 1 && range[0] === '*') {
    firstString += `${command} * FROM ${table} WHERE`;
    if (params.includes('p1')) priceString += ' OR price <= 50';
    if (params.includes('p2')) priceString += ' OR (price > 50 AND price <= 100)';
    if (params.includes('p3')) priceString += ' OR price > 100';

    if (params.includes('s1')) sizeString += ` OR size = 'small'`;
    if (params.includes('s2')) sizeString += ` OR size = 'medium'`;
    if (params.includes('s3')) sizeString += ` OR size = 'large'`;
    if (params.includes('s4')) sizeString += ` OR size = 'xlarge'`;

    if (params.includes('l1')) locationString += ` OR location = 'North'`;
    if (params.includes('l2')) locationString += ` OR location = 'Gaza'`;
    if (params.includes('l3')) locationString += ` OR location = 'Middle Governorate'`;
    if (params.includes('l4')) locationString += ` OR location = 'Khan Younis'`;
    if (params.includes('l5')) locationString += ` OR location = 'Rafah'`;

    const priceArray = priceString.split(' ');
    priceArray.splice(1, 1);
    const newPriceString = priceArray.join(' ');

    const sizeArray = sizeString.split(' ');
    sizeArray.splice(1, 1);
    const newSizeString = sizeArray.join(' ');

    const locationArray = locationString.split(' ');
    locationArray.splice(1, 1);
    const newLocationString = locationArray.join(' ');

    if (params.split('&').length === 1) {
      if (params.includes('p')) queryString = firstString + newPriceString + ';';
      else if (params.includes('s')) queryString = firstString + newSizeString + ';';
      else if (params.includes('l')) queryString = firstString + newlocationString + ';';
    }

    if (params.split('&').length === 2) {
      if (params.includes('p') && params.includes('s')) {
        queryString = firstString + ' (' + newPriceString.substring(1) + ')' + ' AND ' + '(' + newSizeString.substring(1) + ')' + ';';
      }
      if (params.includes('p') && params.includes('l')) {
        queryString = firstString + ' (' + newPriceString.substring(1) + ')' + ' AND ' + '(' + newLocationString.substring(1) + ')' + ';';
      }
      if (params.includes('s') && params.includes('l')) {
        queryString = firstString + ' (' + newSizeString.substring(1) + ')' + ' AND ' + '(' + newLocationString.substring(1) + ')' + ';';
      }
    }

    if (params.split('&').length === 3)   queryString = firstString + ' (' + newPriceString.substring(1) + ')' + ' AND ' + '(' + newSizeString.substring(1) + ')' + ' AND ' + '(' + newLocationString.substring(1) + ')' + ';';

    if (queryString.includes('((')) queryString.replace('((', '(');
    if (queryString.includes('))')) queryString.replace('))', ')');
  }
  return queryString;
};


module.exports = { sql, sqlBuilder };
