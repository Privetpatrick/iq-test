<template>
  <h1>Обработка результатов</h1>
  <div class="spinner"></div>
  <p>Определение стиля мышления...</p>
</template>

<script>
import { actions } from "../store/index";

export default {
  mounted() {
    setTimeout(() => this.$store.dispatch(actions.SET_PASS), 4000);
  },
};
</script>

<style scoped>
h1 {
  margin-top: 49px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.05em;
}

p {
  margin-top: 30px;
}

.spinner {
  margin-top: 33px;
  width: 69px;
  height: 69px;
  background-image: url("../assets/spinner.svg");
  background-repeat: no-repeat;
  animation: rotating 1.5s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
