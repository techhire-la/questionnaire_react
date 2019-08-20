var express = require('express');
const path = require('path');



var app = express();
var PORT = process.env.PORT || 8080;


///////// ORIGINAL CODE ////////////////
app.use(express.static(__dirname));
//app.use()

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(PORT);
console.log("Server Started on port " + PORT)



////////// NEW CODE /////////////
// const connectDB = require('./config/db')
// //connect database
// connectDB();

// //initialize middleware
// app.use(express.json({extended: false}))


// app.get('/', (req,res) => res.send("API RUNNING"))

// app.use('/api/users', require('./routes/api/users'));




// app.listen(PORT, () => console.log(`Server starting up on port ${PORT}`))