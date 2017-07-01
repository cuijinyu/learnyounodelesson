var http=require("http"),
	path1=process.argv[2],
	path2=process.argv[3],
	path3=process.argv[4];
(function(){
	var dataArray=[];
	var count=0;
	http.get(path1,(res)=>{
		let dataDesc="";
		res.on("data",(data)=>{
			dataDesc+=data;
		})
		res.on("end",()=>{
			dataArray.push(dataDesc);
			count++;
			handle();
				http.get(path2,(res)=>{
				let dataDesc="";
				res.on("data",(data)=>{
					dataDesc+=data;
				})
				res.on("end",()=>{
					dataArray.push(dataDesc);
					count++;
					handle();
					http.get(path3,(res)=>{
							let dataDesc="";
							res.on("data",(data)=>{
								dataDesc+=data;
							})
							res.on("end",()=>{
								dataArray.push(dataDesc);
								count++;
								handle();
							})
						})
					})
				})
			})
		})
		
	function handle(){
		if(count===3){
			for(let i=0;i<3;i++)
			{
				console.log(dataArray[i]);
			}
		}
	}
})()