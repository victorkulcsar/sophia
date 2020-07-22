import ValidateToken from '../class/ValidateToken';

export default (req, res, next) => {
  const hash = req.cookies.hash;
  
  if (!hash) {
    res.redirect('/');
    return
  }

  const isTokenValid = new ValidateToken().verifyToken(hash);
  
  if (!isTokenValid) {
    res.redirect('/');
    return
  }

  req.user = isTokenValid;
  next();

}