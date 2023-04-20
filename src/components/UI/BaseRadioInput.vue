<template>
  <label>
    <input
      type="radio"
      :name="name"
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
  width: 100%;
  height: 50px;
  background: rgb(242, 243, 243, 0.15);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
}

label > input[type="radio"] {
  display: none;
}

label > input[type="radio"] + *::before {
  content: "";
  display: inline-block;
  vertical-align: bottom;
  width: 20px;
  height: 20px;
  margin-left: 35px;
  margin-right: 39px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: white;
}

span {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

label > input[type="radio"]:checked + * {
  color: black;
  background: #ffc700;
}

label > input[type="radio"]:checked + *::before {
  background: #2950c2;
  border-style: solid;
  border-width: 1px;
  border-color: black;
}
</style>
