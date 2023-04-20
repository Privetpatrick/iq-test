<template>
  <div class="navbar-container">
    <div @click="$emit('openMenu')" class="burger-menu">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["openMenu"],
};
</script>

<style scoped>
.navbar-container {
  background: #181818;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 46px;
}

.burger-menu {
  display: inline-block;
  cursor: pointer;
  padding: 10px;
}

.burger-line {
  width: 24px;
  height: 3px;
  background-color: #dadada;
  margin: 5px 0;
}
</style>
