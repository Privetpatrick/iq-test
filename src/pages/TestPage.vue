<template>
  <div class="test-container">
    <title-logo />
    <progress-bar />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 1"
      question-title="Ваш пол:"
      name="sex"
      :values="['Мужчина', 'Женщина']"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 2"
      question-title="Укажите ваш возраст:"
      name="age"
      :values="['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 3"
      question-title="Выберите лишнее:"
      name="houses"
      :values="['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина']"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 4"
      question-title="Продолжите числовой ряд:"
      question-description="18 20 24 32"
      name="numbers"
      :values="['62', '48', '74', '57', '60', '77']"
    />
    <color-question
      v-if="this.$store.getters.getCurrentQuestion === 5"
      question-title="Выберите цвет, который сейчас наиболее Вам приятен:"
      name="color"
      :values="[
        '#A8A8A8',
        '#0000A9',
        '#00A701',
        '#F60100',
        '#FDFF19',
        '#A95403',
        '#000000',
        '#850068',
        '#46B3AC',
      ]"
    />
    <color-question
      v-if="this.$store.getters.getCurrentQuestion === 6"
      question-title="Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:"
      name="color-second"
      :values="[
        '#A8A8A8',
        '#46B2AC',
        '#A95403',
        '#00A701',
        '#000000',
        '#F60100',
        '#850068',
        '#FDFF19',
        '#0000A9',
      ]"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 7"
      question-title="Какой из городов лишний?"
      name="cities"
      :values="['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Каир', 'Оттава']"
    />
  </div>
</template>

<script>
import TitleLogo from "../components/UI/TitleLogo.vue";
import ProgressBar from "../components/UI/ProgressBar.vue";
import BaseQuestion from "../components/questions/BaseQuestion.vue";
import ColorQuestion from "../components/questions/ColorQuestion.vue";

export default {
  components: {
    TitleLogo,
    ProgressBar,
    BaseQuestion,
    ColorQuestion,
  },
};
</script>

<style scoped>
.test-container {
  width: 100%;
  height: calc(100vh - 46px);
  background: url("../assets/test-background.png");
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  margin-bottom: 25px;
}
</style>
