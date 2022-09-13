<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const colorMainGrey = ref(true);

const setYellowTheme = () => {
  colorMainGrey.value = true;
  console.log(colorMainGrey);
};
const setGreyTheme = () => {
  colorMainGrey.value = false;
};
</script>

<template>
  <div class="wrapper" :class="{ theme: colorMainGrey }">
    <Transition appear>
      <nav :class="{ themeNav: colorMainGrey }">
        <RouterLink @click="setGreyTheme" class="firstNav" to="/"
          >Home</RouterLink
        >
        <RouterLink @click="setYellowTheme" class="secondNav" to="/skills"
          >Skills</RouterLink
        >
        <RouterLink @click="setGreyTheme" class="thirdNav" to="/contact"
          >Contact</RouterLink
        >
        <RouterLink @click="setYellowTheme" class="fourthNav" to="/about"
          >About</RouterLink
        >
      </nav>
    </Transition>
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
  background: var(--grey);
  height: 100vh;
  width: 100vw;
}
.theme {
  background: var(--yellow);
}

.v-enter-active,
.v-leave-active {
  transition: all 2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
nav a {
  position: fixed;
  background: var(--yellow);
  padding: 10px 50px;
  color: black;
  font-weight: 700;
  font-size: clamp(16px, 24px, 32px);
  border-radius: 20px;
}
@media (min-width: 600px) {
  nav a {
    padding: 20px 100px;
  }
}
.firstNav {
  top: 0;
  left: 0;
  transform: translatey(-50%) rotate(45deg);
  transform-origin: left center;
}
.firstNav:hover {
  border-left: none;
}
.secondNav {
  top: 0;
  right: 0;
  transform: translatey(-50%) rotate(-45deg);
  transform-origin: right center;
}
.secondNav:hover {
  border-right: none;
}
.thirdNav {
  bottom: 0;
  left: 0;
  transform: translatey(50%) rotate(-45deg);
  transform-origin: left center;
}
.thirdNav:hover {
  border-left: none;
}
.fourthNav {
  bottom: 0;
  right: 0;
  transform: translatey(50%) rotate(45deg);
  transform-origin: right center;
}
.fourthNav:hover {
  border-right: none;
}

nav a.router-link-exact-active {
  color: white;
}

nav a:hover {
  background-color: transparent;
  border: 3px solid var(--yellow);
  color: white;
}
.themeNav a {
  background: var(--grey);
  color: white;
}
.themeNav a:hover {
  background-color: transparent;
  border: 3px solid var(--grey);
  color: var(--grey);
}
</style>
