<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <nav>
      <Transition name="first" appear>
        <RouterLink class="navlink firstNav" to="/">Home</RouterLink>
      </Transition>
      <Transition name="second" appear>
        <RouterLink
          class="navlink secondNav"
          :class="{ themeNav: colorMainGrey }"
          to="/skills"
          >Skills
        </RouterLink>
      </Transition>
      <Transition name="third" appear>
        <RouterLink class="navlink thirdNav" to="/contact">Contact</RouterLink>
      </Transition>
      <Transition name="fourth" appear>
        <RouterLink class="navlink fourthNav" to="/about"> About </RouterLink>
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
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition-duration: 0.6s;
  /* background-image: url("assets/bg21.svg"); */
  background-image: url("assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.theme {
  transition-duration: 0.6s;
  background: var(--yellow);
}

.navlink {
  position: absolute;
  /* background: var(--yellow); */
  color: var(--yellow);
  font-weight: 500;
  font-size: 1.5rem;
  padding: 14px 30px;
  border-radius: 20px;
  overflow: hidden;
  white-space: pre;
  /* border: 7px solid var(--yellow); */

  font-family: "Alfa Slab One", cursive;
  text-shadow: 3px 3px 1px rgb(0, 0, 0), 4px 4px 2px rgb(223, 212, 212);
}
@media (min-width: 600px) {
  .navlink {
    padding: 20px 35px;
    font-size: 2rem;
  }
}
@media (min-width: 900px) {
  .navlink {
    font-size: 2.5rem;
    padding: 20px 40px;
  }
}
@media (min-width: 1200px) {
  .navlink {
    font-size: 3rem;
    padding: 20px 50px;
  }
}
@media (min-width: 1720px) {
  .navlink {
    font-size: 3.5rem;
    padding: 30px 100px;
  }
}
.navlink.router-link-exact-active {
  color: white;
  /* border: 3px solid white; */
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
  /* border: 3px solid white; */
  color: white;
}
.themeNav:hover {
  background-color: transparent;
  /* border: 3px solid var(--grey); */
  color: white;
}

.firstNav {
  top: 0;
  left: 0;
  transform: translatey(-50%) rotate(45deg);
  transform-origin: left center;
  border-left: none;
}

.secondNav {
  top: 0;
  right: 0;
  transform: translatey(-50%) rotate(-45deg);
  transform-origin: right center;
  border-right: none;
}
.thirdNav {
  bottom: 0;
  left: 0;
  transform: translatey(50%) rotate(-45deg);
  transform-origin: left center;
  border-left: none;
}
.fourthNav {
  bottom: 0;
  right: 0;
  transform: translatey(50%) rotate(45deg);
  transform-origin: right center;
  border-right: none;
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
  transition: all 0.6s ease 1s;
}
.second-enter-active {
  transition: all 0.6s ease 1.5s;
}
.third-enter-active {
  transition: all 0.6s ease 2s;
}
.fourth-enter-active {
  transition: all 0.6s ease 2.5s;
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
