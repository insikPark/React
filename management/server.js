const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
    res.send({message : 'Hello Express!'});
});

app.listen(5000, ()=> console.log('Listening on port : 5000'));


