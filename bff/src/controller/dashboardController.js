export default {
  get: (req, res) => {
    const { role } = req.user
    res.render('template', { page: `dashboard-${role}` })
  }
}