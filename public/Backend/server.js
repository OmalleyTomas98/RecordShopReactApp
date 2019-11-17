const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const recordRoutes = express.Router();
const PORT = 4000;

let Record = require('./record');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/records', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

recordRoutes.route('/').get(function(req, res) {
    Record.find(function(err, records) {
        if (err) {
            console.log(err);
        } else {
            res.json(records);
        }
    });
});



recordRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Record.findById(id, function(err, record) {
        res.json(record);
    });
});



recordRoutes.route('/update/:id').post(function(req, res) {
    Record.findById(req.params.id, function(err, record) {
        if (!record)
            res.status(404).send("data is not found");
        else
            record.record_description = req.body.record_description;
            record.record_artist = req.body.record_artist;
            record.record_year = req.body.record_year;
            record.record_listened = req.body.record_listened;

            record.save().then(record => {
                res.json('record updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

recordRoutes.route('/add').post(function(req, res) {
    let record = new Record(req.body);
    record.save()
        .then(record => {
            res.status(200).json({'record': 'record added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new record failed');
        });
});

app.use('/records', recordRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});