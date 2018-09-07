<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ countWithPercentage }}</h1>
    <button @click="increment(1000)">Increment</button>
  </div>
</template>

<script>
import { mapState, mapGetters,mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      msh: "Welcome to Vue"
    }
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters({
      countWithPercentage: 'getCountAsPercentage'
    })
    // count(){
    //   return this.$store.state.count;
    // },
    // countWithPercentage()
    // {
    //   return this.$store.getters.getCountAsPercentage
    // }
  },
  methods:{
    ...mapActions({
      increment:'incrementAfterProvidedTime'
    })
    // increment(){
    //   // this.$store.commit('increment')
    //   // this.$store.dispatch('incrementAfter100ms')
    //   // this.$store.dispatch('incrementAfterProvidedTime', 1000)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
