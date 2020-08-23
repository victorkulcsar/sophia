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
  
  _reduceKnowledge(data, area, conhecimento) {
    return data.reduce((acc, atual) => {
      if (atual.area === area && atual.conhecimento === conhecimento) {
        acc++
      }
      return acc;
    }, 0)
  },

  knowledgeByAreaByUser (id) {
    const data = this.selectKnowlegeByUser(id)

    return [
      {
        name: 'Domino',
        data: [
          (
            this._reduceKnowledge(data, 'BackEnd', 3) +
            this._reduceKnowledge(data, 'Arquitetura', 3) +
            this._reduceKnowledge(data, 'Geral', 3)
          ),
          this._reduceKnowledge(data, 'FrontEnd', 3),
          this._reduceKnowledge(data, 'DevOps', 3),
        ]
      }, {
        name: 'Sei bem',
        data: [
          (
            this._reduceKnowledge(data, 'BackEnd', 2) +
            this._reduceKnowledge(data, 'Arquitetura', 2) +
            this._reduceKnowledge(data, 'Geral', 2)
          ),
          this._reduceKnowledge(data, 'FrontEnd', 2),
          this._reduceKnowledge(data, 'DevOps', 2),
        ]
      }, {
        name: 'Sei pouco',
        data: [
          (
            this._reduceKnowledge(data, 'BackEnd', 1) +
            this._reduceKnowledge(data, 'Arquitetura', 1) +
            this._reduceKnowledge(data, 'Geral', 1)
          ),
          this._reduceKnowledge(data, 'FrontEnd', 1),
          this._reduceKnowledge(data, 'DevOps', 1),
        ]
      }, {
        name: 'Não sei',
        data: [
          (
            this._reduceKnowledge(data, 'BackEnd', 0) +
            this._reduceKnowledge(data, 'Arquitetura', 0) +
            this._reduceKnowledge(data, 'Geral', 0)
          ),
          this._reduceKnowledge(data, 'FrontEnd', 0),
          this._reduceKnowledge(data, 'DevOps', 0),
        ]
      }
    ]
  },

  monthlyEvolutionByAreaByUser (id) {
    const { knowledge } = users.selectByUser(id)

     const monthly = knowledge.map(item => {
      const data = Object.keys(item)[0].split('-')
      return moment(data[0], 'MM').format('MMM')
    })

    const values = knowledge.map(item => {
      const data = Object.keys(item)[0]
      return Object.values(item[data]).reduce((acc, atual) => {
        return acc + atual;
      }, 0)
    })

    return {
      series: [{
        name: 'Conhecimento',
        data: values
      }],
      options: {
        xaxis: {
          categories: monthly
        }
      }
    }
  },

  monthlyEvolutionByUser(id) {
    const { knowledge } = users.selectByUser(id)

    const values = knowledge.map(item => {
      const data = Object.keys(item)[0]
      return Object.values(item[data]).reduce((acc, atual) => {
        return acc + atual;
      }, 0)
    })

    if (values.length === 1) {
      return 0
    }

    return (values.slice(-2)[0] / values.slice(-1)[0]).toFixed(1)
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
