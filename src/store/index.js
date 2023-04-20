import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentQuestion: 1,
      numberOfQuestions: 12,
      answers: [],
      pass: false,
    };
  },
  getters: {
    getCurrentQuestion(state) {
      return state.currentQuestion;
    },
    getNumberOfQuestions(state) {
      return state.numberOfQuestions;
    },
    getAnswers(state) {
      return state.answers;
    },
    getPass(state) {
      return state.pass;
    },
  },
  mutations: {
    setCurrentQuestion(state) {
      state.currentQuestion++;
    },
    addAnswer(state, answer) {
      state.answers.push(answer);
    },
    setPass(state) {
      state.pass = true;
    },
  },
  actions: {
    submitAnswer(context, answer) {
      context.commit("setCurrentQuestion");
      context.commit("addAnswer", answer);
    },
    setPass(context) {
      context.commit("setPass");
    },
  },
});

export const actions = {
  SUBMIT_ANSWER: "submitAnswer",
  SET_PASS: "setPass",
};
