import { createStore } from "vuex"
import getRandomInt from "@/helpers/getRandomInt"

export default createStore({
    state: {
      counter: 1,
      lastMutation: 'none',
      isLoading: false,
      newVal: null,
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
        state.newVal = val;
      },
      setLoading( state,val ){
        state.isLoading = val;
        state.lastMutation = 'setLoading';
      }

    },
    // Puedes ser ASINCRONA
    actions:{
      async incrementRandomInt({commit}){
        commit('setLoading', true)
        const randomInt = await getRandomInt()
        commit('incrementBy', randomInt)
        commit('setLoading', false)
       
      }
    }
})