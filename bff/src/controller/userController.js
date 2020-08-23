import db from '../model/data'

export default {
  get: (req, res) => {
    const { role, id } = req.user
    const { name, area, avatar } = db.selectByUser(id)
    res.json({ 
      name, 
      area, 
      id, 
      role, 
      avatar, 
    })
  },

  post: (req, res) => {
    const { skill, id } = req.body;
    
    db.updateKnowlageByUser(req.user.id, id, skill)
    const data = db.selectKnowlegeByUser(req.user.id)
    res.json(data)
  },
}