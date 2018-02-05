export function	getData(login,callback)
{
	const url = 'https://api.github.com/users/' + login + '/repos';
	$.getJSON(url,(data) =>{
		callback.call(this,data);
	});	
		
}

