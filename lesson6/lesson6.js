var ls=require("./fsreaddir.js"),
	filePath=process.argv[2],
	fileType=process.argv[3];
ls(filePath,fileType,function(err,data){//console.log("OK")
});