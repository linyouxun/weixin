var request = require('request');
function get(params){
  request(params.url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // 打印google首页
    }
  })
}

function post(){

}

module.exports = {
  get:get,
  post:post,
}
