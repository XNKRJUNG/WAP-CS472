//module.exports = {}


// module.exports.getName = function () {
//     console.log("Tan baby");
// }

//module.exports ={
// "getName" : fn
//}

//return module.exports


//exports = module.exports = {}

exports.getFirstName = () => {
    console.log("Tan");
}

exports = {
    getFirstName: () => {
        console.log("Cyrus");
    }
}

module.exports.getFullname = function () {
    console.log("Pachakey ");
}