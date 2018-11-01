/**
 * Created by acer on 2018/8/22.
 */
const express=require('express');
const bodyParser=require('body-parser');
const pic=require('./routes/pic.js');
const cases=require('./routes/cases.js');
const casesdetails=require('./routes/casesdetails.js');

var app=express();
app.listen(3000);

app.use(express.static('./static'));

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use('/pic',pic);
app.use('/cases',cases);
app.use('/casesdetails',casesdetails);
