// const query = require('../Database/queries/query');

// exports.get = (req, res) => {
//   res.render('details', { title: 'item details', style: 'style' });
// };
//
// exports.post(req,res) =>{
//   const data = req.body;
//
//   const sql ={
//     text:'SELECT name,shop_name,size,price,location,img,views1,views2,views3,views4 FROM items WHERE items.id= $1',
//
//   }
//
// }

const viewDetails = require('../Database/queries/viewDetails');

exports.get = (req, res) => {
  const itemId = req.params.id;
  viewDetails(itemId, (err, details) => {
      console.log("hiiiiiii",details);
    if (err) return res.status(500).send({ err });
    const bigimg = {
      views1: details[0].views1,
      name: details[0].name,
      shop_name: details[0].shop_name,
      price: details[0].price,
    };
    const itemviews = {
      views1: details[0].views1,
      views2: details[0].views2,
      views3: details[0].views3,
      views4: details[0].views4,

    };
    console.log("hiiiiiii",bigimg);
    console.log("hiiiiiii",itemviews);
    return res.render('details', {
      style: 'details', layout: 'main', title: 'details', details, bigimg, itemviews,
    });
  });
};
