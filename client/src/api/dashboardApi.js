import axios from 'axios'

export default {
  getDashboard: () => {
    return axios.get('/data/dashboard')
  }
}
