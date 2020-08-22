export default {
  view: (req, res, next) => {
    const  [ path ] = req.path.split('/').filter(i => i)
    const { role } = req.user
    
    res.render('template', { page: `${path}-${role}` })
  }
}