const express = require('express');
const connectDB = require('./config/db')



const app = express()

//connect database 
connectDB();

//initialize middleware
app.use(express.json({extended: false}))


app.get('/', (req,res) => res.send("API RUNNING"))

app.use('/api/users', require('./routes/api/users'));
app.use('/api/programs', require('./routes/api/programs'));
app.use('/api/auth', require('./routes/api/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starting up on port ${PORT}`))