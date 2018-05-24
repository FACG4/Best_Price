const getItems = require('./../Database/queries/women');

exports.get = (req, res) => {
  getItems(req, (err,result)=>{
    if (err) {
      return res.status(404).send(err, 'sorry error in getting data')
    }
    // console.log(result);
    res.render('women',{title:'women Fashion',style:'style',result})
  });

}


// router.get('/:class' , (req ,res)=>{
//  getProductByCat( req.params.class , (err , res)=>{
//    if(err) return next(err)
//
//    res.render('category' , {result : res.rows})
//  })
//
//
// })
// router.get('/top' , (req ,res)=>{
//
//
//   res.render('category' , womenProducts)
// })
// router.get('/access' , (req ,res)=>{
//
//
//   res.render('category' , womenProducts)
// })
