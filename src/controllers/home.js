const sliderPic = require('./../Database/queries/slectorSlider');
const disconutValue = require('./../Database/queries/discount');
// exports.getPicSlider = (req,res) => {
// sliderPic(req,(err,result) => {
//     if(err){
//       return res.status(404).send(err,'error in dataSlider')
//     }
//     // console.log(result,'result');
//     res.render('home',{result});
//   })

exports.disconutValue = (req,res) => {
  disconutValue(req,(err,result) => {

    if(err){
      return res.status(404).send(err,'error in Database')
    }
    console.log(result,'result');
    res.render('home',{result});
  })


}
