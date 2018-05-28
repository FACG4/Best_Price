const getMenProductsfromDB = require('./../database/queries/men');

exports.discount = (req, res)=>{
  getMenProductsfromDB(req, (err,result)=>{
  if(err){
    throw new Error (err, 'error in getting data')
  }
  res.render('men',{style:"style",result})
});
}
