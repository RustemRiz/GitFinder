const url = "https://api.github.com/users/RustemRiz/repos";
export function	getData(q,callback)
{
	$.getJSON(url,(data) =>{
		console.log(data);
		callback.call(data);

	});

}


