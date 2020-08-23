import axios from 'axios'

export default {
  login: ({ name, pass }) => {
    return axios.post('/data/login', { name, pass })
  }
}
