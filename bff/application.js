import Server from './src/middleware/server';
import controller from './src/controller'
import auth from './src/middleware/auth'

const server = new Server()

// data
server.route('/data/login')
  .post(controller.loginController.post)

server.route('/data/user')
  .get(auth, controller.userController.get)
  //.post(auth, controller.userController.post)

server.route('/data/editor')
  .get(auth, controller.editorController.get)

server.route('/data/squads')
  .get(auth, controller.squadController.get)

// url views template
server.route('/')
  .get(controller.loginController.get)

server.route(/[a-z]/)
  .get(auth, controller.viewController.view)

server.listen();

