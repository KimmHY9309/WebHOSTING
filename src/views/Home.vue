<template>
  <div class="home">
    <FriedChicken></FriedChicken>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import FriedChicken from '../components/FriedChicken.vue'
export default {
  name: 'Home',
  components: {
    //HelloWorld,
    FriedChicken,
  }
}
</script>
