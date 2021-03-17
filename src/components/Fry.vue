<template>
  <div>
      <button @click="alertMessage">FRY</button>
      <chicken/>
  </div>
</template>

<script>
import Chicken from "./Chicken.vue"

export default {
    components:{
        Chicken,
    },
    methods:{
        alertMessage() {
            console.log("여기는 FRY.VUE");
            this.$store.dispatch('alertMessage');
        }
    }
}
</script>
