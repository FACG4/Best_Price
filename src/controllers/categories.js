// const TorsoProduct = require('./../Database/queries/categories');
//
// exports.getcata = (req,res)=>{
//   const class1 = req.params.class;
//   console.log(class1);
//    TorsoProduct(class1,(err,torsoData)=>{
//      if(err){
//         return res.status(404);
//      }
//      return res.render('catagories', {torsoData})
//    });
// }
//
// // exports.getlegs = (req,res) => {
// // legProduct(req,(err,legsData) => {
// //   if (err){
// //     return res.status(404);
// //   }
// //   return res.render('categories', {legsData})
// // });
// // };
// // exports.getshose = (req,res) => {
// // legProduct(req,(err,shoesData) => {
// //   if (err){
// //     return res.status(404);
// //   }
// //   return res.render('categories', {shoesData})
// // });
// // };
// //
// // exports.getacceories= (req,res) => {
// // legProduct(req,(err,accessoriesData) => {
// //   if (err){
// //     return res.status(404);
// //   }
// //   return res.render('categories', {accessoriesData})
// // });
// // };
