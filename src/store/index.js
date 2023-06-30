import { createStore } from "vuex"
import getRandomInt from "@/helpers/getRandomInt"

export default createStore({
    state: {
      counter: 1,
      lastMutation: 'none',
      loading: false,
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

    },
    // Puedes ser ASINCRONA
    actions:{
      async incrementRandomInt(context){
        const randomInt = await getRandomInt()
        context.commit('incrementBy', randomInt)
      }
    }
})