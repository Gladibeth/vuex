<template>
  <div>
    <h1>Accedo directo: {{  $store.state.counter  }}</h1>
    <h2>Counter computed {{ counterComputed }}</h2>


    <button @click="increment">1+</button>
    <button @click="incrementBy">5+</button>
    <button @click="incrementRandom">Random</button>

    

    
    <h1>mapState array</h1>
    <h2>{{ counter }}</h2>
    <h1>mapState obj</h1>
    <h2>{{ counter  }} - {{ lastMutation }}</h2>

    <h2><strong>Nuevo valor {{ newVal }}</strong></h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default{
    name: 'CounterComponent',
    computed:{
      counterComputed(){
        return this.$store.state.counter
      },
      ...mapState(['counter', 'newVal']),
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
      incrementRandom(){
        this.$store.dispatch('incrementRandomInt');
      }
    }
  }
</script>