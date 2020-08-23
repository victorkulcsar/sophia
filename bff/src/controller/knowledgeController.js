import db from '../model/data'

export default {
  get: (req, res) => {
    const knowledge = db.selectKnowlegeByUser(req.user.id)

    const formatKnowledge = knowledge.map(item => ({
      id: item.id,
      Area: item.area,
      Sub: item.sub,
      Tecnologia: item.tecnologia,
      value: item.conhecimento,
      _rowVariant: ''
    }))

    res.json(formatKnowledge)
  },

  post: (req, res) => {
    const { skill, id } = req.body;
    
    db.updateKnowlageByUser(req.user.id, id, skill)
    const data = db.selectKnowlegeByUser(req.user.id)
    res.json(data)
  },
}