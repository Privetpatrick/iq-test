<template>
  <div class="background">
    <p>Пройдите точный и быстрый</p>
    <h1 class="title">тест на определение IQ</h1>
    <img src="../assets/brain.png" />
    <base-button @click="navigateTo('test')" class="button"
      >Пройти тест</base-button
    >
    <p class="text">
      <span>И получите рекомендации по развитию своего интеллекта</span><br />и
      улучшению финансового благосостояния и личной жизни
    </p>
    <div @click="navigateTo('about')" class="more-container">
      <div class="more-logo"></div>
      <div class="more">Подробнее</div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  methods: {
    navigateTo(value) {
      this.$router.push("/" + value);
    },
  },
};
</script>

<style scoped>
.background {
  width: 100%;
  height: calc(100vh - 46px);
  background-image: url("../assets/test-background.png");
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  margin-top: 27px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
}

.title {
  margin-top: 40px;
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffc700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 50px;
}

img {
  width: 220px;
}

.button {
  margin-top: 30px;
}

.text {
  margin: 22px 30px 0 30px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
}

.text span {
  color: #ffc700;
}

.more-container {
  margin-top: auto;
  margin-bottom: 11px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.more-logo {
  width: 16px;
  height: 16px;
  background-image: url("../assets/arrow.svg");
  cursor: pointer;
}

.more {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  text-align: center;
  letter-spacing: 0.05em;
}
</style>
