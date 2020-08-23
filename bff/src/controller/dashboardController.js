import db from '../model/data'

export default {
  get: (req, res) => {
    const { role, id } = req.user
    let dashboard

    if (role === 'default') {
      dashboard = db.default(id)
    } else {
      dashboard = db.techLead(id)
    }

    res.json(dashboard)
  },
}