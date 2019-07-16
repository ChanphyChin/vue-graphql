<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { organization } from '@/services/graphql/index.gql';
// import test from '@/services/graphql'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  // apollo: {
  //   test: {
  //     query: test.info,
  //     variables: {
  //       leave: false,
  //       unallocated: false,
  //       id: "001",
  //       name: "",
  //       index: 0,
  //       pageSize: 10
  //     }
  //   }
  // },
  methods: {
    query() {
      this.$apollo.query({
          query: organization,
           variables:{
             id:"001"
           }     
      }).then(date=>{
        console.log(date);
      })
    },
    // mutate() {
    //   this.$apollo.mutate({
    //     mutation: test.mutateTest,
    //     variables: {
    //       commentInput: {
    //         username: '',
    //         content: 'this.content'
    //       }
    //     }
    //   })
    // }
  },
  mounted() {
    this.query();
    this.$store.dispatch('getOrganization');
    // this.mutate();
  }
}
</script>
