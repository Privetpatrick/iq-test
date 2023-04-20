<template>
  <div class="test-container">
    <title-logo />
    <progress-bar v-if="!this.$store.getters.getPass" />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 1"
      question-title="Ваш пол:"
      :values="['Мужчина', 'Женщина']"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 2"
      question-title="Укажите ваш возраст:"
      :values="['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 3"
      question-title="Выберите лишнее:"
      :values="['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина']"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 4"
      question-title="Продолжите числовой ряд:"
      question-description="18 20 24 32"
      :values="['62', '48', '74', '57', '60', '77']"
    />
    <color-question
      v-if="this.$store.getters.getCurrentQuestion === 5"
      question-title="Выберите цвет, который сейчас наиболее Вам приятен:"
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
    <card-question
      v-if="this.$store.getters.getCurrentQuestion === 8"
      question-title="Выберите правильную фигуру из четырёх пронумерованных."
      image="figure"
      :values="[1, 2, 3, 4]"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 9"
      question-title="Вам привычнее и важнее:"
      :values="[
        'Наслаждаться каждой минутой проведенного времени',
        'Быть устремленными мыслями в будущее',
        'Учитывать в ежедневной практике прошлый опыт',
      ]"
    />
    <base-question
      v-if="this.$store.getters.getCurrentQuestion === 10"
      question-title="Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:"
      :values="[
        'Оно остроконечное',
        'Оно устойчиво',
        'Оно-находится в состоянии равновесия',
      ]"
      :image="true"
    />
    <card-question
      v-if="this.$store.getters.getCurrentQuestion === 11"
      question-title="Вставьте подходящее число"
      image="star"
      :values="[34, 36, 53, 44, 66, 42]"
    />
    <load-data v-if="spinnerIsOn" />
    <result-data v-if="this.$store.getters.getPass" />
  </div>
</template>

<script>
import TitleLogo from "../components/UI/TitleLogo.vue";
import ProgressBar from "../components/UI/ProgressBar.vue";
import BaseQuestion from "../components/questions/BaseQuestion.vue";
import ColorQuestion from "../components/questions/ColorQuestion.vue";
import CardQuestion from "../components/questions/CardQuestion.vue";
import LoadData from "../components/LoadData.vue";
import ResultData from "../components/ResultData.vue";

export default {
  components: {
    TitleLogo,
    ProgressBar,
    BaseQuestion,
    ColorQuestion,
    CardQuestion,
    LoadData,
    ResultData,
  },
  computed: {
    spinnerIsOn() {
      return (
        this.$store.getters.getCurrentQuestion ===
          this.$store.getters.getNumberOfQuestions &&
        !this.$store.getters.getPass
      );
    },
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
