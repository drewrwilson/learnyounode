//load file system module
var fs = require('fs');

//load path module
var path = require('path');


// get filename from arguments
var myDir = process.argv[2];

// get filename from arguments
var filter = process.argv[3];
var outputList = [];

function printDirectory () {
	fs.readdir(myDir, function callback (err, list) { 
		if (err) {
			console.log('There is an error!');
			console.log(err.toString());			
		} else {
			for (var i = 0; i<list.length;i++)

				if (filter) {
					myFilter = '.' + filter;
					fileExtension = path.extname(list[i]);
					if (myFilter == fileExtension) {
						console.log(list[i].toString());
					}
				} else {
					console.log(list[i].toString());
				}			
		}
	
	});
}

printDirectory();