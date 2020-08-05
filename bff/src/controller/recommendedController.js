export default {
  view: (req, res) => {
    const { role } = req.user
    res.render('template', { page: `recommended-${role}` })
  }
}