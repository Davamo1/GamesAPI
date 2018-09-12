const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

var path = require('path');
var http = require("http");
var url = require("url");
var cors = require("cors");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '../')));

app.options('*', cors()); 


// url: http://localhost:3000/
app.get('/', (request, response) => response.send('Hello World'));

// all routes prefixed with /api
app.use('/api', router);



// using router.get() to prefix our path
// url: http://localhost:3000/api/
router.get('/', (request, response) => {
  response.json({message: 'Hello, welcome to my  APi using NodeJs '});
});




  router.get('/game', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;
    // e.g. myVenues = 12;
    
    
    
    
    response.json([

      // make sure to use the [] of line 48 when needed, and not in part III
        

        // I

        // In order To check that the api works

       /* {
            "ID" : 30,
            "Player1": "fake From Node",
            "Player2": "Seconde fake from Node",
            "Game_Name": "Whatever",
            "Who_Whon": "Everyone"
        },
        {
            "ID" : 31,
            "Player1": "2fake From Node",
            "Player2": "2Seconde fake from Node",
            "Game_Name": "2Whatever",
            "Who_Whon": "2Everyone"
        }*/


        // II

        // In order to get an empty results

        // {}

        // III

        // In order to get a large amount of results

        // put this code before response.json (line 45)

        //let _game = []
          //  for (let i = 0; i< 1000; i++){
            //_game.push({
          //"ID" : i,
          //"Player1": "Multiple fake From Node",
          //"Player2": "Multiple Seconde fake from Node",
          //"Game_Name": "Whatever",
          //"Who_Whon": "Everyone"
          //})
          // }

          // Then send response.json(_game)
    
    
          ]



        
        


      
      );
  });  

  
  

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));