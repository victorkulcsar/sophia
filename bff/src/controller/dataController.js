import db from '../model/data'
 
export default {
  get: (req, res) => {
    const data = db.findDataById(req.user.id)
    res.json(data)
  },

  post: (req, res) => {
    const { skill, id } = req.body;
    
    db.writeFile(req.user.id, id, skill)
    const data = db.findDataById(req.user.id)
    res.json(data)
  }
}
