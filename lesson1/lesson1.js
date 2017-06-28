var arguments=process.argv,
	result=0,
	numbers=arguments.slice(2);
var newnumbers=numbers.map(function(item){
		return +item;
	});
for(let i=0;i<newnumbers.length;i++)
{
	result+=newnumbers[i];
}
console.log(result);