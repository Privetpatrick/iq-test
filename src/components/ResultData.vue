<template>
  <div class="container">
    <h1>Ваш результат рассчитан:</h1>
    <p class="text-description">
      <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более
      чем на 15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <h2>Скорее получите свой результат!</h2>
    <div class="text-container">
      <p>
        В целях защиты персональных данных результат теста, их подробная
        интерпретация и рекомендации доступны в виде голосового сообщения по
        звонку с вашего мобильного телефона
      </p>
    </div>
    <p class="call-text">
      Звоните скорее, запись доступна всего<br />{{ minutesLeft }} МИНУТ
    </p>
    <button @click="fetchData">
      <div class="call-logo"></div>
      <p>Позвонить и прослушать результат</p>
    </button>
    <div v-if="responseData" class="data">
      <div>Name: {{ responseData.name }}</div>
      <div>Gender: {{ responseData.gender }}</div>
      <div>Height: {{ responseData.height }}</div>
      <div>Mass: {{ responseData.mass }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 600,
      intervalID: undefined,
      responseData: undefined,
    };
  },
  computed: {
    minutesLeft() {
      const m = Math.floor((this.seconds % 3600) / 60)
          .toString()
          .padStart(2, "0"),
        s = Math.floor(this.seconds % 60)
          .toString()
          .padStart(2, "0");
      return m + ":" + s;
    },
  },
  mounted() {
    this.intervalID = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        clearInterval(this.intervalID);
        window.location.reload();
      }
    }, 1000);
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        const data = await response.json();
        this.responseData = data;
        clearInterval(this.intervalID);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 24px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
}

.text-description {
  margin-top: 14px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
}

.text-description span {
  text-decoration: underline;
}

h2 {
  margin-top: 22px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3bde7c;
}

.text-container {
  margin: 12px 35px 0 35px;
  padding: 15px 12px;
  text-align: center;
  background: #1c2741;
  border-radius: 6px;
}

.call-text {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #3bde7c;
}

button {
  width: 80%;
  height: 92px;
  padding: 34px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #ffffff;
  background: #eb1b00;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: start;
}

.call-logo {
  margin-right: 20px;
  width: 29px;
  height: 29px;
  background-image: url("../assets/call.svg");
}

.data {
  margin-top: 20px;
}
</style>
