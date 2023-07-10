<template>
  <HeaderNav />
  <div class="wrapper">
    <DragRow class="row" width="100%" topPercent="30" sliderColor="#A65500" sliderBgColor="#FF8300"
      sliderHoverColor="#FF8300" sliderBgHoverColor="#A65500" sliderWidth="15">
      <template #top>
        <DragCol height="100%" width="100%" leftPercent="30" sliderColor="#A65500" sliderBgColor="#FF8300"
          sliderHoverColor="#FF8300" sliderBgHoverColor="#A65500" sliderWidth="15">
          <template #left>
            <Catalog />
          </template>
          <template #right>
            <Table />
          </template>
        </DragCol>
      </template>
      <template #bottom>
        <DragCol height="100%" width="100%" leftPercent="30" sliderColor="#A65500" sliderBgColor="#FF8300"
          sliderHoverColor="#FF8300" sliderBgHoverColor="#A65500" sliderWidth="15">
          <template #left>
            <FileContent />
          </template>
          <template #right>
            <Chart />
          </template>
        </DragCol>
      </template>
    </DragRow>
  </div>
</template>

<script>
import {
  DragCol,
  DragRow,
  ResizeCol,
  ResizeRow,
  Resize,
} from "vue-resizer";
import HeaderNav from "@/components/HeaderNav.vue"
import Catalog from "@/components/Catalog.vue"
import Table from "@/components/Table.vue"
import FileContent from "@/components/FileContent.vue"
import Chart from "@/components/Chart.vue"
export default {
  components: {
    DragCol,
    DragRow,
    ResizeCol,
    ResizeRow,
    Resize,
    HeaderNav,
    Catalog,
    Table,
    FileContent,
    Chart
  },

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

html,
body {
  height: 100%;
}

.wrapper {
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.row {
  flex: 1 1 auto;
}
</style>
