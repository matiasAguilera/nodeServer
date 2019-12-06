const express=require('express');
const app=express();
const morgan=require('morgan');
const cors=require('cors');

const {mongoose}=require('./database');
//Setings
app.set('port',process.env.PORT||3000);

//Middleares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origins:'http://localhost:4200'}));
//Routes
app.use('/api/environments',require('./routes/environments'));
app.use('/api/geographicalregions',require('./routes/geographicalregion'));
app.use('/api/namingconventions',require('./routes/namingconventions'));
app.use('/api/os',require('./routes/os'));
app.use('/api/purposes',require('./routes/purpose'));
app.use('/api/roles',require('./routes/rule'));
app.use('/api/typeofresources',require('./routes/typeofresource'));
app.use('/api/typevirtualmachines',require('./routes/typevirtualmachine'));
app.use('/api/listentities',require('./routes/listentities'));
app.use('/api/listvirtualmachine',require('./routes/listapp'));
app.use('/api/listvmr',require('./routes/virtualmachinesassociatedresources'));
app.use('/api/listacronimos',require('./routes/acronimo'));
app.use('/api/recursos',require('./routes/resource'));
app.use('/api/otrosrecursos',require('./routes/otherResources'));
//Starting sv
app.listen(app.get('port'),()=>
{
    console.log(`server connect in port ${app.get('port')}`);
});
// app.get('/', function(req, res) {
    // res.sendFile(__dirname + '/index.html');
// });