// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/wx');
//
// var Schema = mongoose.Schema,
//     ObjectId = Schema.ObjectId;
//
//
// /**
//  *  微信
//  */
//  var WXAccessToken = new Schema({
//    access_token:String,
//    expires_in:Number,
//    create_date:Date,
//    end_date:Date
//  });
//  WXAccessToken
//
//
//
// /**
//  * [WXUser description]
//  * @type {Schema}
//  */
// var WXUser = new Schema({
//     openid      : String
// });
//
// var WXUserModel = mongoose.model('WXUser',WXUser);
//
// function saveUser(user){
//   var wxUser = new WXUserModel(user);
//   wxUser.save(function (err) {
//     if (!err) console.log('Success!');
//   });
// }
//
// module.exports = {
//   saveUser:saveUser
// }
