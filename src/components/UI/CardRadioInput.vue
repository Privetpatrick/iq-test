<template>
  <label>
    <input
      type="radio"
      name="radio-input"
      :value="value"
      @change="$emit('answer', $event.target.value)"
    />
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  props: ["name", "value"],
  emits: ["answer"],
};
</script>

<style scoped>
label {
  width: 41px;
  height: 41px;
  cursor: pointer;
  background-color: white;
}

label > input[type="radio"] {
  display: none;
}

label > input[type="radio"] + *::before {
  content: "";
}

span {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 49px;
  color: #0d0c11;
}

label > input[type="radio"]:checked + * {
  border: 6px solid #ffc700;
}
</style>
