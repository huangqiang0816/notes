const server = require("./start");
const router = require('./router');

server.start(router.route);
