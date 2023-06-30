<template>
  <div>
    <h1>Accedo directo: {{  $store.state.counter  }}</h1>
    <h2>Counter computed {{ counterComputed }}</h2>
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
    }
  }
</script>