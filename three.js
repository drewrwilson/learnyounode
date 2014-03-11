//load file system module
var fs = require('fs');

// get filename from arguments
var myFile = process.argv[2];

var bufferInString, bufferSplitUp;

//read file
function getFileContents (fileCallBack) {
	fs.readFile(myFile, function (err, data) { 
			bufferInString = data.toString();
			bufferSplitUp = bufferInString.split('\n');
			fileCallBack();
		});	
}

function lengthOfFile () {
	console.log(bufferSplitUp.length - 1);
}

getFileContents(lengthOfFile);
