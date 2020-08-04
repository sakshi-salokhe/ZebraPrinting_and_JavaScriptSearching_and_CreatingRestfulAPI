const express = require('express');
var cors = require('cors');
const csv = require('csvtojson')

const serverapp = express();
serverapp.use(cors()); 
const csvFilePath = 'aspen_data_file.csv';

serverapp.use((req, res, next) => {

    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
        res.status(200).json(jsonObj);
    })
});

module.exports = serverapp;