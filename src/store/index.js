import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      salt: 30,
      message: "치킨은 맛있다.",
  },
  mutations:{
    alertMessage: function(state){
        alert("salt : " + state.salt +" message : " +state.message);
    }
  },
  actions: {
    alertMessage: function(context){
        return context.commit('alertMessage')
    },
  },
})
