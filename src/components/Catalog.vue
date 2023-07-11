<template>
  <section class="catalog">
    <h2>Каталог</h2>
    <ul class="catalog__buttons">
      <li v-for="btn in  buttonList " :key="btn.id">
        <button @click="setActiveFile(btn.id - 1)" class="catalog__button" :class="{
          'catalog__button--active': btn.id === activeFile + 1
        }">Траектория {{ btn.id }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      setActiveFile: 'setActiveFile',
    }),
  },
  computed: {
    ...mapState({
      buttonList: state => state.chartsData,
      activeFile: state => state.activeFile,
    }),
  },
}
</script>

<style scoped>
.catalog {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  float: left;
}

.catalog::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.catalog::-webkit-scrollbar {
  width: 5px;
  background-color: #F5F5F5;
}

.catalog::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #555;
}

.catalog__buttons {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.catalog__button {
  padding: 5px;
  width: 100%;
  text-align: left;
  border: none;
  background-color: #FF8300;
  cursor: pointer;
  font-size: 16px;
}

.catalog__button:hover {
  background-color: #A65500;
}

.catalog__button--active {
  color: #fff;
}
</style>
