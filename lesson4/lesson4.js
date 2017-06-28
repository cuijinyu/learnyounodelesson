var fs=require("fs"),
	filePath=process.argv[2];
	fs.readFile(filePath,function(err,data){
		if(err)
		{
			throw err;
		}else{
			console.log (data.toString().split("\n").length-1);
		}
	})