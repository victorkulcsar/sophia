var jwt = require('jsonwebtoken');

export default class ValidateToken {

  constructor() {
    this.SECRET = "2020aihpos";
    this.expires = 1200; // 20 min
  }

  generateToken({ id, name, role }) {
    var token = jwt.sign({ id, name, role }, this.SECRET, { expiresIn: this.expires })
    return token;
  }

  verifyToken(token) {
    if (!token) return false
    
    return jwt.verify(token, this.SECRET, (err, data) => {
      if(err) return false;

      return data;
    });
  }

}