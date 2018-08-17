const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const userContr = require('./controller/userController.js');
const empContr = require('./controller/empController.js');
const mongoose = require('mongoose');
app.use(bodyParser.json());
mongoose.connect('mongodb://192.168.1.50:27017/employee', { useNewUrlParser: true });
app.use('/',userContr);

app.post('/emp',empContr.save);

app.use('/get/:age',empContr.get);

app.use('/getId/:id',empContr.getId);

app.put('/update/:id',empContr.update);

app.delete('/delete/:id',empContr.delete);

app.listen(4010,()=>console.log('listening on 4010'))