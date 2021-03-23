// exporting function

let array = [
    {
        name: "Bhavya"
    },
    {
        name: "Nipun"
    },
    {
        name: "Rupal"
    },
    {
        name: "Sony"
    }
]
module.exports.home = function (request, response) {
    return response.render('home', {
        title: "Home",
        something: array
    });
}

// Syntax 
// module.exports.actionName=function(request,response){};