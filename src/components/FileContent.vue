<template>
  <section>
    <h2 class="">Файл</h2>
    <p>{{ chartData }}</p>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      chartData: state => state.chartsData,
    }),
  },
}
</script>

<style scoped></style>
