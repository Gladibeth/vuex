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
      ...mapState(['counter']),
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
        const random = Math.random() * 100;
        this.$store.commit('incrementRandom', random.toFixed(0));
      }
    }
  }
</script>