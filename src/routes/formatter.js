let trim = function() {
    console.log('the trimed string is', "     Hello World    ".trim() )
};
let lower = function() {
    console.log('the lower case string is', "AWeSoMe".toLowerCase())
};
let upper = function() {
    console.log('the upper case string is', "AweSoMe".toUpperCase())
}


module.exports.Trimfunc = trim;
module.exports.changeToLowerCase = lower;
module.exports.changeToUpperCase = upper;