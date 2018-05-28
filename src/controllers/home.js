const disconutValue = require('../Database/queries/discount');

exports.disconutValue = (req,res) => {
  disconutValue(req,(err,result) => {
    
    if(err){
      return res.status(404).send(err,'error in Database')
    }
    return res.render('home', {
  style: 'homeStyle', layout: 'main', title: 'homePage',result});
});
}
