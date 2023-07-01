<template>
  <div>
    <h1>Accedo directo: {{  $store.state.counter.counter  }}</h1>
    <h2>Counter computed {{ counterComputed }}</h2>


    <button @click="increment">1+</button>
    <button @click="incrementBy">5+</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

    

    
    <h1>mapState array</h1>
    <h2>{{ counter }}</h2>
    <h1>mapState obj</h1>
    <h2>{{ counter  }} - {{ lastMutation }}</h2>

    <h2><strong>New value {{ newVal }}</strong></h2>


    <strong>Direct getters {{ $store.getters['counter/squareCounter'] }}</strong>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default{
    name: 'CounterComponent',
    computed:{
      counterComputed(){
        return this.$store.state.counter.counter
      },
      // primer argumento el modulo y el segundo todo lo que se deba mapear
      ...mapState('counter',['counter', 'newVal', 'isLoading']),
      ...mapState({
        count: state => state.counter.counter,
        lastMutation: state => state.counter.lastMutation
      })
    },
    methods:{
      increment(){
        this.$store.commit('counter/increment');
      },
      incrementBy(){
        this.$store.commit('counter/incrementBy', 5);
      },
      // esta es una opcion, pero un poco larga
      /* incrementRandom(){
        this.$store.dispatch('incrementRandomInt');
      } */

      // Otra opcion y la las factible
      //...mapActions('counter',['incrementRandomInt'])
      ...mapActions('counter',{
        randomInt: 'incrementRandomInt',
      })
    }
  }
</script>