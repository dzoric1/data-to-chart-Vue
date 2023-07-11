<template>
  <Line :data="{
    ...chartData,
    labels: chartList[activeFile].time,
    datasets: [
      {
        label: 'Зависимость скорости от времени',
        backgroundColor: '#f87979',
        data: chartList[activeFile].speed,
        borderWidth: 3
      }
    ]
  }" :options="chartOptions" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { mapState } from 'vuex'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  components: {
    Line
  },
  data() {
    return {
      chartData: {
        labels: this.chartList,
        datasets: []
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  mounted() {
  },
  computed: {
    ...mapState({
      chartList: state => state.chartsData,
      activeFile: state => state.activeFile,
    }),
  },
}
</script>
