<template>
  <Transition appear>
    <div class="about">
      <div class="textAbout">
        <h1>
          I am junior front-end developer. In my carrer path I would like to
          develop in modern frameworks such as VUE3 or React. Currently looking
          for a job where I could improve my skills.
        </h1>
      </div>
      <img src="../assets/foto.png" alt="" />
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.about {
  display: flex;
  flex-direction: column;
}

.textAbout {
  width: 350px;
  color: var(--white);
  padding: 20px;
  border-radius: 20px;
  text-align: justify;
}
h1 {
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-size: 18px;
}

img {
  width: 200px;
  margin-left: auto;
}
@media (max-width: 900px) and (orientation: landscape) {
  img {
    display: none;
  }
}
@media (min-width: 600px) {
  h1 {
    font-size: 24px;
  }
  .textAbout {
    width: 400px;
  }
}
</style>
