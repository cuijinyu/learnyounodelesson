	var fs=require("fs");
	var result=[];
module.exports=function(filePath,fileType,cb){
	fs.readdir(filePath,function(err,list){
	if(err)
	{
		return cb(err);
	}else{
		for(i in list)
		{
			let index=list[i].lastIndexOf('.'+fileType);
			if(index!=-1)
			{
				console.log(list[i]);
				result.push(list[i]);
			}
		}
		cb(null,result);
	}
})
}