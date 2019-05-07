const burl = {
    hostname: 'http://localhost',
    port: 5000,
    secret: 'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAd/JKKaBGsEoUY+GM1TIGQcOcEkXRtA4CO8vfMP49RGVPlGZJhKBnrA6xIZXA7K/+REPWbLfnoUQ4yi56avsN6wIDAQAB',
}


const marvelUrl = 'http://gateway.marvel.com/v1/public/characters'
const privateKey = '7143c11c865ecd50325c9bfdfe0de0fe0bb93deb';
const publicKey = '9998f0d612547d752faf7e8fc3c9081a';
const timestamp = new Date().getTime();
const offset = 5; //affichage d'une liste de 20 personnages à partir du centièm
const limit = 20; ////affichage d'une liste de 20 personnage

module.exports = {
    burl,
    marvelUrl,
    privateKey,
    publicKey,
    timestamp,
    offset,
    limit
};