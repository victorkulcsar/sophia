import db from '../model/data'

export default {
  get: (req, res) => {
    const data = db.selectTeamsByManager(req.user.id)
    res.json(data)
  }
}