<template>
  <header class="header">
    <h1 class="header__title">Траектории</h1>
    <div class="header__buttons">
      <button type="button" class="header__button">
        Файл
      </button>
      <button type="button" class="header__button">
        Настройки
      </button>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  padding: 10px 20px;
  background-color: #FF8300;
  display: flex;
  flex-direction: column;
}

.header__title {
  font-size: 26px;
  color: #fff;
  letter-spacing: 1px;
}

.header__buttons {
  display: flex;
  gap: 10px;
}

.header__button {
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  min-width: 100px;
  border: none;
  background-color: #A65500;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
}

.header__button:hover {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
    -4px -4px 6px 0 rgba(116, 125, 136, .5),
    inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}
</style>
