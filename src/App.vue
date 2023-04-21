<template>
  <div class="wrapper">
    <base-container v-show="!burgerMenuIsOpen">
      <nav-bar @openMenu="burgerToggle" />
      <router-view />
    </base-container>
    <base-container v-show="burgerMenuIsOpen">
      <burger-menu @closeMenu="burgerToggle" />
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./components/UI/BaseContainer.vue";
import NavBar from "./components/UI/NavBar.vue";
import BurgerMenu from "./components/UI/BurgerMenu.vue";

export default {
  components: {
    BaseContainer,
    NavBar,
    BurgerMenu,
  },
  data() {
    return {
      burgerMenuIsOpen: false,
    };
  },
  methods: {
    burgerToggle() {
      this.burgerMenuIsOpen = !this.burgerMenuIsOpen;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  width: 100%;
  background-color: #181818;
  color: white;
}

.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}
</style>
