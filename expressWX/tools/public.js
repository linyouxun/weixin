var SHA1 = require("./sha1.js")

const APPID = "wx068b554c3e527071";
const APPSECRET = "20c77397c118a5b06ea5a10051237644";
const TOKEN = "gst";


function checkWXInfo(query){
  var sortData = [TOKEN,query.timestamp,query.nonce].sort().join("");
  if(query.signature === SHA1.hex_sha1(sortData)){
    return true;
  }else{
    return false;
  }
}

module.exports = {
  checkWXInfo:checkWXInfo,
}
