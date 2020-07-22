export default {
  install (Vue, options) {
    Vue.prototype.$route = {
      push: (url) => {
        location.href = url
      }
    }
  }
}