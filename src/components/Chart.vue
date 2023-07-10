<template>
  <section class="hhh">
    <h2 class="">График</h2>
    <BarChart />
  </section>
</template>

<script>
import BarChart from './BarChart.vue'
export default {
  components: {
    BarChart
  },
}
</script>

<style scoped>
.hhh {
  max-height: 90%;
}
</style>
