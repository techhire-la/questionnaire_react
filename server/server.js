const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, "..", 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// * matches all unmatched routes
// works like historyApiFallback in webpack
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Express Server is up!')
});