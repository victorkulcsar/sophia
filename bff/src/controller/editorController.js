import db from '../model/data'

export default {
  view: (req, res) => {
    res.render('template', { page: 'editor-manager' })
  },
  data: (req, res) => {
    const data = db.JsonByModelo();
    res.json(data)
  }
}