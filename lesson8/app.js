const http=require("http");
var path=process.argv[2];
var dataAll='';
http.get(path,function(res){
	res.on("data",(data)=>{
		dataAll+=data;
	})
	res.on("end",()=>{
		//dataAll.replace("undefined","");
		console.log(dataAll.length);
		console.log(dataAll);
	})
})
