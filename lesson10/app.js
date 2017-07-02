var net=require("net");
var port=process.argv[2];//监听命令行的第一个参数
var server=net.createServer(function(socket){
		let date=new Date();
		let year=date.getFullYear();
		year.toString();
		let month=date.getMonth()+1;
		year.toString();
		let day=date.getDate();
		day.toString();
		let hour=date.getHours();
		hour.toString();
		let minutes=date.getMinutes();
		minutes.toString();
		if(month<10)
		{
			month='0'+month;
		}
		if(day<10)
		{
			day='0'+day;
		}
		if(hour<10)
		{
			hour='0'+hour;
		}
		if(minutes<10)
		{
			minutes='0'+minutes;
		}
		let time=`${year}-${month}-${day} ${hour}:${minutes}\n`;
	socket.end(time);
});
server.listen(port);
