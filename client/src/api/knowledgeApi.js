import axios from 'axios'

export default {
  getKnowledge: () => {
    return axios.get('/data/knowledge')
  },
  setNewKnowledge: ({ skill, id }) => {
    return axios.post('/data/knowledge', { skill, id })
  }
}
