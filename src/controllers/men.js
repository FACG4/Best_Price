const getMenProductsfromDB = require('./../Database/queries/men');

exports.discount = (req, res)=>{
  getMenProductsfromDB(req, (err,result)=>{
  if(err){
    throw new Error (err, 'error in getting data')
  }
  console.log(result);
  res.render('men',{style:"style",result})
});
}
