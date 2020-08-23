import moment from 'moment';
import path from 'path'
import fs from 'fs';  
import jsonFormat from 'json-format';

import users from './users'

const actualDate = moment().format("MM-YYYY");

export default {
  selectKnowledge() {
    const { data } = require('../data/_knowledge.json');
    return data
  },

  _createKnowledgeDefault() {
    const data = this.selectKnowledge()
    const knowledge = {}

    data.forEach(item => {
      knowledge[`${item.id}`] = 0
    })
    
    return knowledge
  },

  _verifyIsExistKnowledge(user) {
    const knowledge = user.knowledge
    return knowledge.length
  },

  _verifyIsActualKnowledge(user) {
    const knowledge = user.knowledge.find(item => item[actualDate])
    return knowledge
  },

  _createNewKnowledge({ id }, oldKnowledge) {
    const knowledge = oldKnowledge ? oldKnowledge : this._createKnowledgeDefault()

    const data = users.selectAllUsers()
      .map(user => {
        if (user.id === id) {
          user.knowledge.push({ [`${actualDate}`]: knowledge })
        }
        return user
      })
    
    this._writeFile(data)
  },

  _selectLastKnowledgeByUser(id) {
    const { knowledge } = users.selectByUser(id)
    const legend = Object.keys(knowledge.slice(-1)[0])[0]
    return knowledge.slice(-1)[0][legend]
  },

  selectKnowlegeByUser(id) {
    const user = users.selectByUser(id);
    
    if (!this._verifyIsExistKnowledge(user)) {
      this._createNewKnowledge(user)
      this.selectKnowlegeByUser(id)
    }
      
    if (!this._verifyIsActualKnowledge(user)) {
      const oldKnowledge = this._selectLastKnowledgeByUser(id)
      this._createNewKnowledge(user, oldKnowledge)
      this.selectKnowlegeByUser(id)
    }

    const knowledge = user.knowledge.find(item => item[actualDate])[actualDate]
    const data = this.selectKnowledge().map(item => {
      item.conhecimento = knowledge[`${item.id}`] || 0;
      return item
    });

    return data || { data: [] }

  },
  
  updateKnowlageByUser(userId, id, nivel) {
    
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


    this._writeFile(data)

    return users.selectByUser(userId)
  },

  _writeFile (data) {
    const config = {
      type: 'space',
      size: 2
    }

    fs.writeFileSync(
      `${path.resolve(__dirname, `../data/_users.json`)}`,
      jsonFormat({ data }, config)
    );
  }
}
