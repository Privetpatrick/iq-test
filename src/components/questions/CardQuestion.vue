<template>
  <div class="question-container">
    <h1>{{ questionTitle }}<br />{{ questionDescription }}</h1>
    <img
      v-if="this.image !== 'star'"
      src="../../assets/card-image-figure.png"
    />
    <img v-else src="../../assets/card-image-star.png" />
    <div class="radio-inputs-container">
      <card-radio-input
        v-for="value in values"
        :key="value"
        :value="value"
        @answer="pickAnswer"
        >{{ value }}</card-radio-input
      >
    </div>
    <base-button class="button" @click="submitAnswer" :disabled="!value"
      >далее</base-button
    >
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import CardRadioInput from "../UI/CardRadioInput.vue";
import { actions } from "../../store/index";

export default {
  components: {
    BaseButton,
    CardRadioInput,
  },
  props: ["questionTitle", "image", "values"],
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
.question-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 101px;
  margin-bottom: 38px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.05em;
}

.radio-inputs-container {
  margin: 23px 35px 0 35px;
  width: 70%;
  display: flex;
  justify-content: space-around;
}

.button {
  margin-top: auto;
  margin-bottom: 25px;
}

img {
  margin-top: 74px;
}
</style>
