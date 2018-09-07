import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        count: 1
    },
    mutations:{
        increment(state){
            return state.count++ 
        }
    },
    getters:{
        getCountAsPercentage(state){
            return state.count + '%'   //kao computed componente
        }
    },
    actions:{
        incrementAfter100ms(context){
            setTimeout(()=>{
                context.commit('increment')
            },100)
        },
        incrementAfterProvidedTime(context,milliseconds){
            setTimeout(()=>{
                context.commit('increment')
            },milliseconds)
        }
    }
})