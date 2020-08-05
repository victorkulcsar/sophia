import path from 'path'
import fs from 'fs';  
import jsonFormat from 'json-format';
import moment from 'moment';

const actualDate = moment().format("MM-YYYY");

export default {
  JsonByModelo() {
    return require('../data/_knowledge.json');
  },

  JsonAllUsers() {
    return require('./../data/_users.json').data;
  },

  JsonByUser(id) {
    return require('./../data/_users.json').data.find(item => item.id === id);
  },

  knowledgeByUser(id) {
    return this.JsonByUser(id).knowledge.pop();
  },

  actualKnowledge (user) {
    return user.knowledge.find(item => item[actualDate])[actualDate]
  },

  findDataById(id) {
    const { data: modelo } = this.JsonByModelo();
    const user = this.JsonByUser(id);
    const knowledge = this.actualKnowledge(user)

    console.log(knowledge)


    const data = modelo.map(item => {
      item.conhecimento = knowledge[`${item.id}`] || 0;
      return item
    });
    
    if (!data) {
      return { data: [] }
    } 
  
    return data
  },

  writeFile(userId, id, nivel) {
    const config = {
      type: 'space',
      size: 2
    }

    const data = this.JsonAllUsers().map(user => {
      if (user.id === userId) {
        user.knowledge.map(item => {
          if (item[actualDate]) {
            item[actualDate][`${id}`] = parseInt(nivel)
          }
          return item
        })
      }
      return user
    })


    fs.writeFileSync(
      `${path.resolve(__dirname, `../data/_users.json`)}`,
      jsonFormat({ data }, config)
    );

    return this.JsonByUser(userId)
  }
  
}