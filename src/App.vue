<script setup lang="ts">
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
  padding: 10px 50px;
  color: var(--grey);
  font-weight: 700;
  font-size: clamp(16px, 24px, 32px);
  border-radius: 20px;
  overflow: hidden;
}
@media (min-width: 600px) {
  .navlink {
    padding: 20px 100px;
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
  transition: all 0.5s ease;
}
.second-enter-active {
  transition: all 0.5s ease;
  transition-delay: 0.1s;
}
.third-enter-active {
  transition: all 0.5s ease;
  transition-delay: 0.2s;
}
.fourth-enter-active {
  transition: all 0.5s ease;
  transition-delay: 0.3s;
}
.first-enter-from,
.second-enter-from,
.third-enter-from,
.fourth-enter-from {
  opacity: 0;
}
</style>
