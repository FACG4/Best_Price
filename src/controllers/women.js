const getItems = require('./../Database/queries/women');

exports.get = (req, res) => {
  getItems(req, (err,result)=>{
    if (err) {
      return res.status(404).send(err, 'sorry error in getting data')
    }

    res.render('women',{title:'women Fashion',style:'style',result})
  });

}
