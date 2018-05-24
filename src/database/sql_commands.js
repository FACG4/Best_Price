const categoryCommands = {
  selectNoFilter: 'SELECT * FROM items;',
  selectLowPrice: 'SELECT * FROM items WHERE PRICE < 70',
};

module.exports = { categoryCommands };
