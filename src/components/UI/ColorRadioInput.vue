<template>
  <label :style="{ backgroundColor: value }">
    <input
      type="radio"
      :name="name"
      :value="value"
      @change="$emit('answer', $event.target.value)"
    />
    <span></span>
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
  width: 75;
  height: 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

label > input[type="radio"] {
  display: none;
}

label > input[type="radio"] + *::before {
  content: "";
  width: 75px;
  height: 75px;
}

span {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

label > input[type="radio"]:checked + * {
  outline: 6px solid #ffc700;
}
</style>
