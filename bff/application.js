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

server.listen();

