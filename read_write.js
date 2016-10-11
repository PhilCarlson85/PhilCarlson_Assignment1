var fs = require("fs");

fs.readFile('Assignment1_names.txt', function (err, data){
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());

});

