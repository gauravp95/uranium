let newDate = new Date();
let date = function() {
    console.log("Todays date is",newDate.getDate())
};
let Month = function() {
    console.log("Current Month is", newDate.getMonth())
};
let Batch = function() {
    console.log("Uranium, W3D3, the topic for today is nodejs module system")  
}

module.exports.printTodaysDate = date;
module.exports.printCurrentMonth = Month;
module.exports.printBatchInformation = Batch;