<template>
  <div>
    <button
      @click="
        alertMessage();
        print();
      "
    >
      CHICKEN
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["alertMessage"]),
    print() {
      console.log("여기는 CHICKEN");
    },
  },
};
</script>
