const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.defaults({
  static: path.join(__dirname, '../public')
}));
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
