var http=require("http");
var fs=require("fs");
var port=process.argv[2];
var path=process.argv[3];
var desc='';
var server=http.createServer((req,res)=>{
	var rs=fs.createReadStream(path);
	rs.on("data",(data)=>{
		desc+=data;
	})
	rs.on("end",()=>{
		res.end(desc);
	})
});
server.listen(port);