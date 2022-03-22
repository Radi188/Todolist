import { createStore } from 'vuex'
// Create a new store instance.
const store = createStore({
  state: {count : 0},
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store