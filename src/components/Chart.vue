<template>
  <section class="chart">
    <h2 class="">График</h2>
    <LineChart />
  </section>
</template>

<script>
import LineChart from './LineChart.vue'
export default {
  components: {
    LineChart
  },
}
</script>

<style scoped>
.chart {
  padding: 0 30px;
  max-height: 90%;
}
</style>
