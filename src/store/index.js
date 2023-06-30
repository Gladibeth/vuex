import { createStore } from "vuex"

export default createStore({
    state: {
      counter: 1,
      lastMutation: 'none'
    },
    // mutaciones son SINCRONAS
    mutations:{
      increment( state ){
        state.counter++;
        state.lastMutation = 'increment';
      },
      incrementBy( state, val ){
        state.counter += val;
        state.lastMutation = 'incrementBy';
      },
      incrementRandom( state, val ){
        state.counter += val;
        state.lastMutation = 'incrementRandom';
      }
    }
})