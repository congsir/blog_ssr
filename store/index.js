import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: function(){
//     return{
//       is_toTop : 0
//    }
//   },
//   mutations: {
//     toTopM(state){
//       state.is_toTop = 1;
//     },
//     de_toTopM(state){
//       state.is_toTop = 0;
//     }
//   },
//   actions: {
//     toTop(context) {
//       context.commit('toTopM')
//     },
//     de_toTop(context){
//       context.commit('de_toTopM')
//     }
//   }
// })
export const state = () => ({
  is_toTop : 0
})

export const mutations = {
      toTopM(state){
      state.is_toTop = 1;
    },
    de_toTopM(state){
      state.is_toTop = 0;
    }
}
export const actions = {
      toTop(context) {
      context.commit('toTopM')
    },
    de_toTop(context){
      context.commit('de_toTopM')
    }
}
