import moment from 'moment';
import path from 'path'
import fs from 'fs';  
import jsonFormat from 'json-format';

import users from './users'

const actualDate = moment().format("MM-YYYY");

export default {
  selectKnowledge() {
    return require('../data/_knowledge.json');
  },
  
  selectLastKnowledgeByUser(id) {
    return users.selectByUser(id).knowledge.pop();
  },

  selectActualKnowledgeByUser (user) {
    return user.knowledge.find(item => item[actualDate])[actualDate]
  },

  selectKnowlegeByUser(id) {
    const user = users.selectByUser(id);
    const knowledge = this.selectActualKnowledgeByUser(user)

    const data = this.selectKnowledge().data.map(item => {
      item.conhecimento = knowledge[`${item.id}`] || 0;
      return item
    });
    
    if (!data) {
      return { data: [] }
    } 
  
    return data
  },
  
  updateKnowlageByUser(userId, id, nivel) {
    const config = {
      type: 'space',
      size: 2
    }

    const data = users.selectAllUsers().map(user => {
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

    return users.selectByUser(userId)
  }
}
