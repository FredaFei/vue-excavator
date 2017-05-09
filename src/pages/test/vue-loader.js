

new Vue({
  el: '#app',
  components: {
    'child-cop': {
      template: '#child',
      data() {
        return {
          msg: 'hello vue-loader'
        }
      }
    }
  }
})