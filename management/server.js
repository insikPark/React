const express = require('express');
const app = express();

app.get('/api/customer', (req, res) => {
    res.send([
        {
            'id' : 1,
            'name' : '이순신',
            'birthday' : '950515',
            'gender' : '남',
            'job' : '장군'
          },
          {
            'id' : 2,
            'name' : '장보고',
            'birthday' : '970302',
            'gender' : '남',
            'job' : '학생'
          }, 
          {
            'id' : 3,
            'name' : '유관순',
            'birthday' : '930212',
            'gender' : '여',
            'job' : '유튜버'
          }
    ]);
});

app.listen(5000, ()=> console.log('Listening on port : 5000'));


