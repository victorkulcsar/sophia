import login from './../data/users.json';
import ValidateToken from '../class/ValidateToken';

export default {
  view: (req, res) => {
    res.render('template', { page: 'login' })
  },
  loginData: ({ body }, res) => {
    const userMatch = login.users.find(user => user.name === body.name)
    if (!userMatch) {
      res.json({ token: null })
      return
    }

    if (body.pass !== userMatch.pass) {
      res.json({ token: null })
    } else {
      const token = new ValidateToken().generateToken(userMatch)
      res.json({ token })
    }
    
  }
}