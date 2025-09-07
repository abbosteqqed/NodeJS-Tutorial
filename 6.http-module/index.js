const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
        res.writeHead(200,{"content-type": "text/plain"})
		res.end("Hello")
	}
});

server.listen(3000, () => {
	console.log(`Server is running on 3000`);
});
