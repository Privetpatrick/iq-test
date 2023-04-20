<template>
  <div class="title-logo-container">
    <img class="logo" src="../../assets/brain.png" />
    <p v-if="!this.$store.getters.getPass" class="title">
      тест на определение IQ
    </p>
    <p v-else class="done">ГОТОВО!</p>
  </div>
</template>

<style scoped>
.title-logo-container {
  position: absolute;
  top: 0;
  left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 48px;
  height: 47px;
}
.title {
  margin-left: 9px;
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffc700;
}

.done {
  margin-left: 9px;
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffc700;
}
</style>
