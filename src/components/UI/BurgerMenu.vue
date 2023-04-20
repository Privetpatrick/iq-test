<template>
  <div class="menu-container">
    <div @click="$emit('closeMenu')" class="close-button">&#10006;</div>
    <div class="menu">
      <p @click="navigateTo('home')">Главная</p>
      <p @click="navigateTo('about')">Информация о тесте</p>
      <p @click="navigateTo('test')">Пройти тест</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["closeMenu"],
  methods: {
    navigateTo(namePage) {
      this.$router.push("/" + namePage);
      this.$emit("closeMenu");
    },
  },
};
</script>

<style scoped>
.menu-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #181818;
}

.close-button {
  margin-top: 18px;
  margin-right: 13px;
  align-self: flex-end;
  cursor: pointer;
  width: 28px;
  height: 28px;
  color: #ffc700;
  font-size: 28px;
  line-height: 24px;
}

.menu {
  margin-top: 64px;
  margin-left: 23px;
}

.menu p {
  cursor: pointer;
  text-transform: uppercase;
}

.menu p:hover {
  color: #f4ce0c;
}
</style>
