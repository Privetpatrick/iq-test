<template>
  <div class="blue-container">
    <div class="quote-top"></div>
    <p>
      Профессиональный IQ-тест позволяет не только определить коэффициент вашего
      интеллекта, но и выработать список рекомендаций для повышения этого
      показателя.
    </p>
    <div class="quote-bottom"></div>
  </div>
  <div class="brain-container">
    <p>
      Также по результатам теста <span>вы получите</span> подробные
      <span>советы</span> по определению наиболее перспективной
      <span>для вашего типа интеллекта сферы деятельности</span>, которая
      принесет вам скорейший финансовый результат.
    </p>
    <div class="img-container">
      <img src="../assets/about-brain.png" />
      <base-button @click="navigateTo('test')">Пройти тест</base-button>
    </div>
  </div>
  <div class="footer-block">
    <p>
      Прохождение теста займет у вас не более <span>12 минут</span>, а его
      результаты вы сможете <span>использовать всю жизнь.</span>
    </p>
    <div class="block-text">
      Профессиональная интерпретация и детально проработанные рекомендации
      позволят вам качественно изменить все аспекты своей жизни: от финансового
      до любовного.
    </div>
    <base-button @click="navigateTo('test')" class="reverse"
      >Пройти тест</base-button
    >
    <div class="copyright">© 2019</div>
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
.copyright {
  margin-top: 52px;
  margin-bottom: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
}
.block-text {
  margin-bottom: 64px;
  padding: 29px 14px;
  background: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #181818;
}
.footer-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 14px 0 14px;
  background-image: url("../assets/footer-background.png");
  background-size: cover;
}

.footer-block p span {
  color: #ffc700;
}
.footer-block p {
  margin-right: 51px;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
}
.img-container {
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  display: block;
}

.brain-container {
  padding: 38px 11px;
}
.brain-container p {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #272727;
}

.brain-container p span {
  text-transform: uppercase;
  font-weight: 600;
}

.blue-container {
  padding: 44px;
  background-image: url("../assets/about-background1.png");
  background-size: cover;
}

.quote-top {
  width: 23px;
  height: 23px;
  background-image: url("../assets/quote-top.svg");
}
.quote-bottom {
  margin-left: auto;
  width: 23px;
  height: 23px;
  background-image: url("../assets/quote-bottom.svg");
}

.blue-container p {
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.05em;
}
</style>
