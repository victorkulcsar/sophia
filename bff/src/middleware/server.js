import path from 'path';
import express from 'express'; 
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import env from './../../config';
const app = express();

class Server {
  constructor () {
    this.server = app;
    
    this.server.set('views', `${__dirname}/../views`);
    this.server.set('view engine', 'mustache');
    this.server.engine('mustache', mustacheExpress());
    this.server.use(bodyParser.json({}));
    this.server.use('/static', express.static(path.resolve('../client/static')))
    this.server.use(cookieParser())
    
  }

  route(path) {
    const server = this.server.route(path)
    return server
  }

  listen() {
    return this.server.listen(env.port, () => console.log(`Listen on port ${env.port}`));
  }

}

module.exports = Server;