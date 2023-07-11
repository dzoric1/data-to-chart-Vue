<template>
  <section class="table__section">
    <h2 class="">Таблица</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Скорость, м/с</th>
          <th>Время, с</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in chartList[activeFile].speed.length">
          <td>{{ chartList[activeFile].speed[index - 1] }}</td>
          <td>{{ chartList[activeFile].time[index - 1] }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      chartList: state => state.chartsData,
      activeFile: state => state.activeFile,
    }),
  },
}
</script>

<style scoped>
.table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
}

.table__section {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  float: left;
}

.table th {
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
}

.table td {
  border: 1px solid #dddddd;
  padding: 5px;
}

.table__section::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.table__section::-webkit-scrollbar {
  width: 5px;
  background-color: #F5F5F5;
}

.table__section::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #555;
}
</style>
