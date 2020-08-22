import Server from './src/middleware/server';
import controller from './src/controller'
import auth from './src/middleware/auth'

const server = new Server()

server.route('/')
  .get(controller.loginController.view)

server.route('/dashboard')
  .get(auth, controller.dashboardController.get)

server.route('/skill')
  .get(auth, controller.skillController.view)

server.route('/users')
  .get(auth, controller.userController.view)

server.route('/graphic')
  .get(auth, controller.graphicController.view)

server.route('/editor')
  .get(auth, controller.editorController.view)

server.route('/guru')
  .get(auth, controller.guruController.view)

server.route('/quest')
  .get(auth, controller.questController.view)

// data
server.route('/data')
  .get(auth, controller.dataController.get)
  .post(auth, controller.dataController.post)

server.route('/data/login')
  .post(controller.loginController.loginData)

server.route('/data/editor')
  .get(auth, controller.editorController.data)

server.route('/data/squads')
  .get(auth, controller.dataController.squads)

server.listen();

