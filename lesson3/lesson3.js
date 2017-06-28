var fs=require("fs"),
	filePath=process.argv[2],
	file=fs.readFileSync(filePath),
	fileString=file.toString();
//console.log(fileString);
var fileArray=fileString.split("\n");
	console.log(fileArray.length-1);
