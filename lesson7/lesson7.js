var http=require("http"),
	path=process.argv[2];
http.get(path,(res)=>{
	res.setEncoding("utf-8");
	res.on("data",(data)=>{
		//data.setEncoding("utf-8");
		console.log(data.toString());
	});
	res.on("error",(error)=>console.log(error));
});
