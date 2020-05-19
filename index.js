const http = require("http");
const routes = require('./route');

const server = http.createServer(routes);

const PORT = process.env.PORT || 5000;
server.listen(PORT);
