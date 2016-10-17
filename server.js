var http = require("http");
var fs = require('fs');

http.createServer(function(request, response) {

	var url = request.url;

	//	Load the interface
	//
	if(url === "/") {
		response.writeHead(200, {
			"Content-type":"text/html"
		});
		return fs.createReadStream("./summons.html").pipe(response);
	}
	
	if(url.indexOf("favicon") !== -1) {
		return response.end();
	}
	
	//	Seek files, or report not found.
	//	Note the includes for summons.html UI also fetch through here.
	//
	url = ".." + url;
	return fs.exists(url, function(exists) {
		if(exists) {
			return fs.createReadStream(url).pipe(response);
		}
		response.writeHead(404);
		response.end("File does not exist on this server");
	});

}).listen(8080);