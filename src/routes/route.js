const express = require('express');
const logger = require('./logger');
const helperModule = require('./helper')
const formatterModule = require('./formatter')
const lodash = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('I am inside the first route handler')
    // console.log('The endpoint value is', logger.endpoint)
    // console.log('Calling log function')
    // logger.logging()
    formatterModule.Trimfunc()
    logger.welcomeMessage()
    helperModule.printTodaysDate()
    helperModule.printCurrentMonth()
    helperModule.printBatchInformation()
    formatterModule.Trimfunc()
    formatterModule.changeToLowerCase()
    formatterModule.changeToUpperCase()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const months = ['January','February','March','April','May','June', 'July','August','September','October','November','December'];
    const oddNum = [1,3,5,7,9,11,13,15,17,19];
    const array1 = [45,56,74,89];
    const array2 = [78,12,16,75];
    const array3 = [69,45,23,15];
    const array4 = [76,48,15,99];
    const array5 = [23,48,85,92];
    const pairs = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]


    console.log(lodash.chunk(months,[4]));
    console.log(lodash.tail(oddNum));
    console.log(lodash.union(array1,array2,array3,array4,array5));
    console.log(lodash.fromPairs(pairs));
    console.log('I am inside the second route handler');
    res.send('My second ever api!');
});




module.exports = router;
// adding this comment for no reason