import db from '../model/data'

export default {
  get: (req, res) => {
    const data = db.JsonByModelo();
    res.json(data)
  }
}