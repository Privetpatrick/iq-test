import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentQuestion: 1,
      numberOfQuestions: 14,
      answers: [],
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
  },
  mutations: {
    setCurrentQuestion(state) {
      state.currentQuestion++;
    },
    addAnswer(state, answer) {
      state.answers.push(answer);
    },
  },
  actions: {
    submitAnswer(context, answer) {
      context.commit("setCurrentQuestion");
      context.commit("addAnswer", answer);
    },
  },
});

export const actions = {
  SUBMIT_ANSWER: "submitAnswer",
};
