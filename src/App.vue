<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
const colorMainGrey = ref(false);
const setYellowTheme = () => (colorMainGrey.value = true);
const setGreyTheme = () => (colorMainGrey.value = false);
</script>

<template>
  <div class="wrapper" :class="{ theme: colorMainGrey }">
    <nav>
      <Transition name="first" appear>
        <RouterLink
          @click="setGreyTheme"
          class="navlink firstNav"
          :class="{ themeNav: colorMainGrey }"
          to="/"
          >Home</RouterLink
        >
      </Transition>
      <Transition name="second" appear>
        <RouterLink
          @click="setYellowTheme"
          class="navlink secondNav"
          :class="{ themeNav: colorMainGrey }"
          to="/skills"
          >Skills</RouterLink
        >
      </Transition>
      <Transition name="third" appear>
        <RouterLink
          @click="setGreyTheme"
          class="navlink thirdNav"
          :class="{ themeNav: colorMainGrey }"
          to="/contact"
          >Contact</RouterLink
        >
      </Transition>
      <Transition name="fourth" appear>
        <RouterLink
          @click="setYellowTheme"
          class="navlink fourthNav"
          :class="{ themeNav: colorMainGrey }"
          to="/about"
          >About</RouterLink
        >
      </Transition>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--grey);
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition-duration: 0.6s;
}
.theme {
  transition-duration: 0.6s;
  background: var(--yellow);
}

.navlink {
  position: absolute;
  background: var(--yellow);
  color: var(--grey);
  font-weight: 700;
  font-size: 1.5rem;
  padding: 14px 50px;
  border-radius: 20px;
  overflow: hidden;
}
@media (min-width: 600px) {
  .navlink {
    padding: 20px 100px;
    font-size: 2rem;
  }
}
@media (min-width: 900px) {
  .navlink {
    font-size: 2.5rem;
    padding: 20px 100px;
  }
}
@media (min-width: 1200px) {
  .navlink {
    font-size: 3rem;
    padding: 25px 125px;
  }
}
@media (min-width: 1720px) {
  .navlink {
    font-size: 3.5rem;
    padding: 30px 150px;
  }
}
.navlink.router-link-exact-active {
  color: white;
  border: 3px solid white;
}
.firstNav.navlink.router-link-exact-active {
  border-left: none;
}
.secondNav.navlink.router-link-exact-active {
  border-right: none;
}
.thirdNav.navlink.router-link-exact-active {
  border-left: none;
}
.fourthNav.navlink.router-link-exact-active {
  border-right: none;
}
.navlink:hover {
  background-color: transparent;
  border: 3px solid var(--yellow);
  color: white;
}
.themeNav:hover {
  background-color: transparent;
  border: 3px solid var(--grey);
  color: white;
}
.firstNav {
  top: 0;
  left: 0;
  transform: translatey(-50%) rotate(45deg);
  transform-origin: left center;
}
.secondNav {
  top: 0;
  right: 0;
  transform: translatey(-50%) rotate(-45deg);
  transform-origin: right center;
}
.thirdNav {
  bottom: 0;
  left: 0;
  transform: translatey(50%) rotate(-45deg);
  transform-origin: left center;
}
.fourthNav {
  bottom: 0;
  right: 0;
  transform: translatey(50%) rotate(45deg);
  transform-origin: right center;
}
.themeNav {
  background: var(--grey);
  color: var(--yellow);
}

.firstNav:hover {
  border-left: none;
}
.secondNav:hover {
  border-right: none;
}
.thirdNav:hover {
  border-left: none;
}
.fourthNav:hover {
  border-right: none;
}
.first-enter-active {
  transition: all 1s ease;
}
.second-enter-active {
  transition: all 1s ease;
}
.third-enter-active {
  transition: all 1s ease;
}
.fourth-enter-active {
  transition: all 1s ease;
}
.first-enter-from {
  transform: rotate(0deg);
  opacity: 0;
}
.second-enter-from {
  transform: rotate(0deg);
  opacity: 0;
}
.third-enter-from {
  transform: rotate(0deg);
  opacity: 0;
}
.fourth-enter-from {
  transform: rotate(0deg);
  opacity: 0;
}
</style>
