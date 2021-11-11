import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0
  },
  // methods or functions that changes the states properties
  // commit methods
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
      decreaseCounter(state, randomNumber) {
     state.counter -= randomNumber
    }
  },
  // can have asynchronous code
  // dispatch method
  actions: {
    increaseCounter({ commit }){
      // fetch data from api
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        // send random number as payload to mutation
       commit('increaseCounter', response.data)
      })
    },
    decreaseCounter({ commit }){
      // fetch data from api
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        // send random number as payload to mutation
       commit('decreaseCounter', response.data)
      })
    }
  },
  getters: {

  },
  modules: {
  }
})
