import data from '../model/data'
import ValidateToken from '../class/ValidateToken';

export default {
  get: (req, res) => {
    res.render('login', { page: 'login' })
  },
  post: ({ body }, res) => {
    const userMatch = data.selectAllUsers().find(user => user.user === body.name)
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