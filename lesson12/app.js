var http=require("http");
var querystring=require("querystring");
var port=process.argv[2];
var server=http.createServer(function(req,res){
	var body='';
	if(req.method!=='POST'){
		return res.end("send a post");
	}
	req.on('data',function(chunk){
		body+=chunk;
	})
	req.on('end',function(){
		//body=querystring.parse(body);
		body=body.toString();
		body=body.toUpperCase();
		console.log(body);
		res.end(body);
	})
})
server.listen(port);