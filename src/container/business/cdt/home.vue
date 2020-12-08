<template>
  <div class="home">
    <v-management></v-management>
  </div>
</template>
<script>
import VManagement from "@/components/public/default.vue";
export default {
  data() {
    return {};
  },
  components: {
    VManagement
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
