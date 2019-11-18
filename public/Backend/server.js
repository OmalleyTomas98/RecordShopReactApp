//Defintions , requirements , express , cors , mongoose , router
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const recordRoutes = express.Router();

//Define port No for server to run on 
const PORT = 4000;

//Define the record Schema
let Record = require('./record');

//Cors Definition 
app.use(cors());
app.use(bodyParser.json());


//Defines the mongoDB Connection I created
const mongoDB = 'mongodb+srv://moss98g:BEAST123@cluster0-mc4w7.mongodb.net/test?retryWrites=true&w=majority';
//Connects to my Mongo Cluster 

mongoose.connect(mongoDB,{useNewUrlParser:true});

//Define the connection
const connection = mongoose.connection;

//Open Connection
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

recordRoutes.route('/').get(function(req, res) {
    //Mongoose  find() query to 
    Record.find(function(err, records) {
        if (err) {
            //DEBUG ERROR REPORT TO CONSOLE
            console.log(err);
        } else {
            //Format  records via JSON 
            res.json(records);
        }
    });
});

//Catches the objects Unique ID and displays the records ID  displays through JSON 
recordRoutes.route('/:id').get(function(req, res) {
    //creates id var and returns record
    let id = req.params.id;
    //
    Record.findById(id, function(err, record) {
        res.json(record);
    });
});

//update function updates the spefic object based off of their Unique ID
recordRoutes.route('/update/:id').post(function(req, res) {
    Record.findById(req.params.id, function(err, record) {
        //DEBUG Return error if the specific object ID is not found
        if (!record)
            //DEBUG return HTTP error status 404 if not found 
            res.status(404).send("data is not found");

        else
            //Mapping Requests to instance variables found in the records schema
            record.record_description = req.body.record_description;
            record.record_artist = req.body.record_artist;
            record.record_year = req.body.record_year;
            record.record_listened = req.body.record_listened;

            //call record object/schema and save the instances of the records then prompt update to console
            record.save().then(record => {
                res.json('record updated!');
            })
            .catch(err => {
                //Debug send HTTP error Status 400 if the the update was not possible to the serve 
                res.status(400).send("Update not possible");
            });
    });
});

//Create  a query to show The Total number of Albums , formats and so on inside of your data 
var query = Record.find({ 'record_description': 'Kanye West' });

//Add a Record into the MongoDB test.records Database
recordRoutes.route('/add').post(function(req, res) {
    let record = new Record(req.body);
    record.save()
        .then(record => {
            //Debug HTTP STATUS 200 if Successfull in the CONSOLE 
            res.status(200).json({'record': 'record added successfully'});
        })
           //Debug HTTP STATUS 400 if Successfull in the CONSOLE 
        .catch(err => {
            res.status(400).send('adding new record failed');
        });
});

//USE the db records folder (records.js)
app.use('/records', recordRoutes);


//Display the port in use to the console for ease of debugging
app.listen(PORT, function() {

    console.log("Server is running on Port: " + PORT);
});