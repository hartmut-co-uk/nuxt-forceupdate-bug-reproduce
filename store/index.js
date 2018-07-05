import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      random: Math.random()
    },
    mutations: {
      update (state) {
        console.log('store mutation::update, mutates `state.random` with new value')
        state.random = Math.random()
      }
    }
  })
}

export default createStore
