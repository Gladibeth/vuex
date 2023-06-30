import { createStore } from "vuex"

export default createStore({
    state: {
      counter: 1,
      lastMutation: 'none'
    }
})