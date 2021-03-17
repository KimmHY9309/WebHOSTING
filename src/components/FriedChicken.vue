<template>
    <div>
        <button @click="alertMessage">FRYEDCHICKEN</button>
        <Fry></Fry>
    </div>
</template>

<script>
import Fry from './Fry.vue'
export default({
    name: "FriedChicken",
    components:{
        Fry
    },
    methods:{
        alertMessage() {
            console.log("여기는 FRYEDCHICKEN.VUE");
            this.$store.dispatch('alertMessage');
        }
    }
})
</script>