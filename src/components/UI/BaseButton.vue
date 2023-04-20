<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  width: 189px;
  height: 41px;
  background: radial-gradient(50% 50% at 50% 50%, #ffc700 0%, #ffc700 100%);
  border-radius: 20px;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0d0c11;
}

.reverse {
  border: 1px solid #ffffff;
  border-radius: 50px;
  background: none;
  color: white;
}

button:disabled {
  background: #dadada;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  color: #8e8e8e;
}
</style>
