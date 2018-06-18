import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://localhost:3000/api/items',
    items: [],
    item: null
  },
  getters: {
    getItemById: state => (id) => {
      return state.items.find(item => item._id === id)
    }
  },
  actions: {
    fetchItems ({commit, state}) {
      return new Promise((resolve, reject) => {
        Vue.http.get(state.url).then(
          response => {
            this.commit('setItems', response.body)
            resolve()
          },
          response => {
            console.log('Loading error')
          }
        )
      })
    },
    addItem ({commit, state}, data) {
      Vue.http.post(state.url, data).then(
        response => {
          console.log('item added')
        }
      )
    },
    deleteItem ({commit, state}, id) {
      Vue.http.delete(`${state.url}/${id}`).then(
        response => {
          this.commit('deleteItem', id)
        }
      )
    },
    editItem ({commit, state}, data) {
      Vue.http.put(`${state.url}/${data._id}`, data).then(
        response => {
          console.log('item added')
        }
      )
    }
  },
  mutations: {
    setItems (state, items) {
      // update items
      state.items = items
    },
    deleteItem (state, id) {
      let index = this.state.items.findIndex(el => el._id === id)
      this.state.items.splice(index, 1)
    }
  }
})
