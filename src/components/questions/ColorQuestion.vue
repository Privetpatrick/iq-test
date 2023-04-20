<template>
  <div class="question-container">
    <h1>{{ questionTitle }}</h1>
    <div class="grid">
      <color-radio-input
        v-for="value in values"
        :key="value"
        :name="name"
        :value="value"
        @answer="pickAnswer"
      />
    </div>
    <base-button class="button" @click="submitAnswer" :disabled="!value"
      >далее</base-button
    >
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import ColorRadioInput from "../UI/ColorRadioInput.vue";
import { actions } from "../../store/index";

export default {
  components: {
    BaseButton,
    ColorRadioInput,
  },
  props: ["questionTitle", "questionDescription", "values", "name"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    pickAnswer(value) {
      this.value = value;
    },
    submitAnswer() {
      this.$store.dispatch(actions.SUBMIT_ANSWER, {
        question: this.questionTitle,
        value: this.value,
      });
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 21px;
}
.question-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 101px 30px 38px 30px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.05em;
}

.button {
  margin-top: auto;
  margin-bottom: 25px;
}
</style>
