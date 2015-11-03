import Vue from 'vue'

var vm = new Vue({
  el: '#app',
  data: {
    searchText: '',
    list: [
      { name: 'aaa'  , key: 'aabbcc'  },
      { name: 'bbb'  , key: 'ccccc'  },
      { name: 'ccccc', key: 'ccccc' }]
  }
})
