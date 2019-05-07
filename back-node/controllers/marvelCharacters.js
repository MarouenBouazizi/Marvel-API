const axios = require('axios');
const crypto = require('crypto');
const { marvelUrl, publicKey, privateKey, timestamp, offset, limit } = require('../config/config.js')
const hash = crypto.createHash('md5').update(`${timestamp}${privateKey}${publicKey}`).digest("hex");

const getAllCharacters = () => 
  axios.get(`${marvelUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}`)
    .then(body => {
      return body.data
    })


module.exports = {
    getAllCharacters
}