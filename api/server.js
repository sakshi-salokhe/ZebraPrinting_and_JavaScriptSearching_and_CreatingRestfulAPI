const http = require('http');
const serverapp = require('./serverapp');

const port = process.env.PORT || 3000;

const server = http.createServer(serverapp);

server.listen(port);