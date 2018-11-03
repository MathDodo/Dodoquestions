const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/**** Configuration ****/
const port = (process.env.PORT || 8080);
const app = express();
app.use(bodyParser.json()); // Parse JSON from the request body
app.use(morgan('combined')); // Log all requests to the console
app.use(express.static('../dist/mandatory_exercise'));

// Additional headers for the response to avoid trigger CORS security
// errors in the browser
// Read more: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

/**** Mock data ****/
let data = [
];

/**** Routes ****/
app.get('/api/my_data', (req, res) => res.json(data));

app.post('/api/my_data', (req, res) => {
  data = req.body;
});

app.delete('/api/my_data', (req, res) => {
  data = [];
}
  );

/**** Reroute all unknown requests to angular index.html ****/
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../dist/mandatory_exercise/index.html'));
});


/**** Start ****/
app.listen(port, () => console.log(`Mandatory exercise API running on port ${port}!`));

