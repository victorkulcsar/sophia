import db from '../model/data'

export default {
  view: (req, res) => {
    const { role } = req.user
    res.render('template', { page: `editor-${role}` })
  },
  data: (req, res) => {
    const data = db.JsonByModelo();
    res.json(data)
  }
}