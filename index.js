const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    console.log('request !');
    res.send('Hello World...00011110!')

})

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})