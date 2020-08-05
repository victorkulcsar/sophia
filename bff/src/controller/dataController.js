import db from '../model/data'
 
export default {
  get: (req, res) => {
    const data = db.selectKnowlegeByUser(req.user.id)
    res.json(data)
  },

  post: (req, res) => {
    const { skill, id } = req.body;
    
    db.updateKnowlageByUser(req.user.id, id, skill)
    const data = db.selectKnowlegeByUser(req.user.id)
    res.json(data)
  },

  squads: (req, res) => {
    const data = db.selectTeamsByManager(req.user.id)
    res.json(data)
  }
}
