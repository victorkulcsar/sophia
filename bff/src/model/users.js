export default {
  selectAllUsers() {
    const { data } = require('../data/_users.json');
    return data;
  },

  selectByUser(id) {
    const { data } = require('../data/_users.json');
    return data.find(item => item.id === id);
  },
}