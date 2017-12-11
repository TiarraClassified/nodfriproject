// proxy set to localhost 5678


const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller/controller')

const app = new express();
app.use( bodyParser.json() );



app.post('/api/weapons', ctrl.create);
app.get('/api/weapons', ctrl.read);
app.put('/api/weapons', ctrl.update);
app.delete('/api/weapons/:id', ctrl.delete);



const port = 5678;

//====================================\\
app.listen(port, _=>{
    console.log(`everything ends, life is pointless, and this is on port ${port}`)
})