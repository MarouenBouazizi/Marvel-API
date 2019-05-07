
//Définition des modules Node.js
const express = require("express"); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan');

const burl = require("./config/config.js").burl;
const jwt = require("./services/jwtService.js");
const marvelCharacters = require("./controllers/marvelCharacters.js");

//Initialisation de l'objet express (app)
const app = express();

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.set('superSecret', burl.secret); // secret variable

app.use(urlencodedParser);
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

//Définition des CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Définition de l'objet myRouter qui va gérer le routage
var myRouter = express.Router(); 

// route middleware to verify a token
myRouter.use(function(req, res, next) {
    const token = jwt.sign({ payload: req.headers['x-access-token'] });
    if (token) {
        const verify = jwt.verify(token, app.get('superSecret'));
        if(!verify) {
            return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });       
        } else {
            req.decoded = verify;         
            next();
        }
    } else {
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
  
    }
});

//Défintion de la route principale -- Page d'acceuil
myRouter.route('/')
    // all permet de prendre en charge toutes les méthodes. 
    .all(function(req,res){ 
        res.json({message : "Bienvenue sur la page Marouen ", methode : req.method});
    });

myRouter.route('/marvel')
    .get(async function(req,res){ 
        const allCharacters = await marvelCharacters.getAllCharacters();
        res.status(allCharacters.code).json(allCharacters)
    })

myRouter.route('*')
    .get(async function(req,res){ 
        res.status(404).json({error: '404 Not Found'})
    })

app.use(myRouter);
//Définition du port d'écoute
app.listen(burl.port, () => console.log(`Listening on server ${burl.hostname} port ${burl.port}`));

module.exports = app