export default {
  selectCompanys () {
    const { data } = require('../data/_companys.json')
    return data[0];
  },
}