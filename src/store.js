import Vue from 'vue'
import Vuex from 'vuex'
import { apolloClient } from './vue-apollo';
import { organization } from '@/services/graphql/index.gql';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
   getOrganization(){
    apolloClient.query({
      query: organization,
       variables:{
         id:"001"
       }     
    }).then(date=>{
      console.log(date, 'vuex');
    })
   }
  }
})
