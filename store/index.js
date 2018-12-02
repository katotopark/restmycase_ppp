import Vuex from 'vuex'

const createStore = () => {
  const store = new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment(state) {
        state.counter++
      }
    }
  })
  return store
}

export default createStore
