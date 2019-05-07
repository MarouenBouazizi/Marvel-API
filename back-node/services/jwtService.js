const fs   = require('fs');
const jwt   = require('jsonwebtoken');

const privateKey  = fs.readFileSync(__dirname + '/config/private.pem', 'utf8');
const publicKey  = fs.readFileSync(__dirname + '/config/public.pem', 'utf8');  

module.exports = {
 sign: (payload) => {
  return jwt.sign(payload, privateKey, { algorithm: 'RS256'});
},
verify: (token) => {
  const verifyOptions = {
      expiresIn:  "1h",
      algorithm:  ["RS256"]
  };
   try{
     return jwt.verify(token, publicKey, verifyOptions);
   }catch (err){
     return false;
   }
},
 decode: (token) => {
    return jwt.decode(token, {complete: true});
 }
}