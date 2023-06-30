<template>
  <div>
    <h1>Accedo directo: {{  $store.state.counter  }}</h1>
    <h2>Counter computed {{ counterComputed }}</h2>


    <button @click="increment">1+</button>
    <button @click="incrementBy">5+</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

    

    
    <h1>mapState array</h1>
    <h2>{{ counter }}</h2>
    <h1>mapState obj</h1>
    <h2>{{ counter  }} - {{ lastMutation }}</h2>

    <h2><strong>New value {{ newVal }}</strong></h2>


    <strong>Direct getters {{ $store.getters.squareCounter }}</strong>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default{
    name: 'CounterComponent',
    computed:{
      counterComputed(){
        return this.$store.state.counter
      },
      ...mapState(['counter', 'newVal', 'isLoading']),
      ...mapState({
        count: state => state.counter,
        lastMutation: state => state.lastMutation
      })
    },
    methods:{
      increment(){
        this.$store.commit('increment');
      },
      incrementBy(){
        this.$store.commit('incrementBy', 5);
      },
      // esta es una opcion, pero un poco larga
      /* incrementRandom(){
        this.$store.dispatch('incrementRandomInt');
      } */

      // Otra opcion y la las factible
      //...mapActions(['incrementRandomInt'])
      ...mapActions({
        randomInt: 'incrementRandomInt',
      })
    }
  }
</script>