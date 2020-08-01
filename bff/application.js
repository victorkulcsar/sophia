import Server from './src/middleware/server';
import controller from './src/controller'
import auth from './src/middleware/auth'

const server = new Server()

server.route('/')
  .get(controller.loginController.view)

server.route('/login')
  .post(controller.loginController.loginData)

server.route('/dashboard')
  .get(auth, controller.dashboardController.get)

server.route('/data')
  .get(auth, controller.dataController.get)
  .post(auth, controller.dataController.post)

server.route('/users')
  .get(auth, controller.userController.view)

server.route('/graphic')
  .get(auth, controller.graphicController.view)

server.route('/editor')
  .get(auth, controller.editorController.view)

server.route('/editor/data')
  .get(auth, controller.editorController.data)

server.route('/guru')
  .get(auth, controller.guruController.view)

server.route('/recommended')
  .get(auth, controller.recommendedController.view)

server.listen();

