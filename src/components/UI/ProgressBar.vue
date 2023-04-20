<template>
  <div class="bar-container">
    <div class="progress-bar">
      <div class="progress__value" :style="progressStatus"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    progressStatus() {
      const current = this.$store.getters.getCurrentQuestion;
      const all = this.$store.getters.getNumberOfQuestions;
      const percentage = (current * 100) / all;
      return { width: percentage + "%" };
    },
  },
};
</script>

<style scoped>
.bar-container {
  width: 100%;
  padding: 17px 30px 0 30px;
}
.progress-bar {
  width: 100%;
  height: 11px;
  background: rgb(242, 243, 243, 0.5);
  mix-blend-mode: normal;
  border-radius: 10.5px;
}

.progress__value {
  width: 0%;
  height: 100%;
  background-color: #3bde7c;
  border-radius: 10.5px;
  bottom: 0;
}
</style>
