var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// add middleware
app.use(bodyParser.urlencoded({ extended: false }));

//cross origin request sharing
var corsOptions = {
  "origin": "https://localhost:3000/",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204
};

app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    
})











var productList = [
    {id:1, productName: 'Colgate', price:15}
];


app.post('/addProduct', function (req, res) {
    console.log("am intrat in /addProduct");
    
    const newProduct = {
        id: productList.length + 1,
        productName: req.body.productName,
        price: req.body.price
    }
    productList.push(newProduct);
    console.log("new product addred");
    console.log(productList);
    
    res.sendStatus(200);
});

app.post('/updateProduct', function (req, res) {
    const product = productList.find(p => p.id === parseInt(req.body.id));
    if(!product) {
            // 404 object not found
            res.status(404).send("Object does not exist");
            //res.redirect('/');
        }
    
    productList.forEach( function(index) {

        if(index.id === parseInt(req.body.id)) {
            index.productName = req.body.productName;
            index.price = req.body.price;
        }
    });
    
    console.log(productList);
    
    res.sendStatus(200);
})



app.post('/deleteProduct', function (req, res) {
    console.log("Am intrat in delete !!");
    const product = productList.find(p => p.id === parseInt(req.body.id));
    if(!product) {
            // 404 object not found
            res.status(404).send("Object does not exist");
            //res.redirect('/');
        }
    console.log("vreau sa il sterg pe :");
    console.log(product);
    
    
    for(var i = 0; i < productList.length; i++) {
        if(productList[i].id === parseInt(req.body.id)) {
            productList.splice(i,1);
        }
    }
    /*
    
    productList.forEach( function(index) {

        if(index.id === parseInt(req.body.id)) {
            
            productList.splice(index,1);
        }
    });
    */
    
    console.log(productList);
    
    res.sendStatus(200);
})









app.get("/doSomething", function (req, res) {
  console.log(req);
  res.json({test: 'test'});
});


app.get("/products", function (req, res) {
  console.log(req);
  res.json(productList);
});

app.post("/doSomething", function(req, res) {
    console.log("call server");
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3001, function() {
    console.log('Server started...');
});
