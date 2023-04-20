const jsonserver = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.default();
const port = process.env.PORT || 5000;
server.use(middleware)
server.use(router)
server.listen(port)