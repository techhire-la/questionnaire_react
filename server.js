var express = require('express');
const path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(PORT);
console.log("Server Started on port " + PORT)