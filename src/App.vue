<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="mainWrapper">
    <nav>
      <Transition name="firstTransition" appear>
        <RouterLink class="navLink firstNavLink" to="/">Home</RouterLink>
      </Transition>
      <Transition name="secondTransition" appear>
        <RouterLink class="navLink secondNavLink" to="/skills"
          >Skills</RouterLink
        >
      </Transition>
      <Transition name="thirdTransition" appear>
        <RouterLink class="navLink thirdNavLink" to="/contact"
          >Contact</RouterLink
        >
      </Transition>
      <Transition name="fourthTransition" appear>
        <RouterLink class="navLink fourthNavLink" to="/about">
          About
        </RouterLink>
      </Transition>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.mainWrapper {
  align-items: center;
  background: black;
  background-image: url("assets/bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.navLink {
  border-bottom: 7px solid var(--white);
  border-radius: 70px;
  color: var(--white);
  font-family: "Alfa Slab One", cursive;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  overflow: hidden;
  padding: 10px 30px;
  position: absolute;
  text-shadow: 4px 4px 1px rgb(0, 0, 0), 4px 4px 2px rgb(223, 212, 212);
  white-space: pre;
}
@media (min-width: 600px) {
  .navLink {
    padding: 10px 40px;
    font-size: 2rem;
  }
}
@media (min-width: 900px) {
  .navLink {
    font-size: 2.5rem;
    padding: 10px 50px;
  }
}
@media (min-width: 1200px) {
  .navLink {
    font-size: 3rem;
    padding: 15px 70px;
  }
}
@media (min-width: 1720px) {
  .navLink {
    font-size: 3.5rem;
    padding: 20px 100px;
  }
}
.navLink.router-link-exact-active {
  border-color: var(--orange);
  box-shadow: 0px 6px 1px var(--black);
}
.navLink:hover {
  color: var(--orange);
}
.firstNavLink {
  top: 0;
  left: 0;
  transform: translatey(-50%) rotate(45deg);
  transform-origin: left center;
  border-left: none;
}
.secondNavLink {
  top: 0;
  right: 0;
  transform: translatey(-50%) rotate(-45deg);
  transform-origin: right center;
  border-right: none;
}
.thirdNavLink {
  bottom: 0;
  left: 0;
  transform: translatey(50%) rotate(-45deg);
  transform-origin: left center;
  border-left: none;
}
.fourthNavLink {
  bottom: 0;
  right: 0;
  transform: translatey(50%) rotate(45deg);
  transform-origin: right center;
  border-right: none;
}
.firstTransition-enter-active {
  transition: all 0.4s ease 3.5s;
}
.secondTransition-enter-active {
  transition: all 0.4s ease 3.9s;
}
.thirdTransition-enter-active {
  transition: all 0.4s ease 4.4s;
}
.fourthTransition-enter-active {
  transition: all 0.4s ease 4.7s;
}
.firstTransition-enter-from,
.secondTransition-enter-from,
.thirdTransition-enter-from,
.fourthTransition-enter-from {
  transform: rotate(0deg);
  opacity: 0;
}
</style>
