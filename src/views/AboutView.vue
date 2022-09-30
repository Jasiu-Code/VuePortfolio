<template>
  <Transition appear>
    <div class="aboutWrapper">
      <h1>
        I'm junior front-end developer.
        <br />
        In my carrer path I would like to develop in modern frameworks such as
        VUE3 or React.
        <br />
        Currently looking for a job where I could improve my skills and learn
        new things.
      </h1>
      <img src="../assets/foto.png" alt="" />
    </div>
  </Transition>
</template>

<style>
.aboutWrapper {
  display: flex;
  flex-direction: column;
}
h1 {
  font-weight: 500;
  background: rgba(0, 0, 0, 0.5);
  max-width: 300px;
  border-radius: 20px;
  padding: 10px;
  font-size: 18px;
}

img {
  width: 200px;
  margin-left: auto;
}

@media (min-width: 900px) {
  h1 {
    font-size: 24px;
    max-width: 500px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
