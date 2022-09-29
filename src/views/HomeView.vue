<script setup>
const firstLine = ["Hi! I'm Jasiu"];
const secondLine = ["front-end"];
const thirdLine = ["developer"];
</script>

<template>
  <main>
    <div class="writerWrapper">
      <p class="startH1">&lt;h1&gt;</p>
      <VueWriter
        :array="firstLine"
        :iterations="1"
        :start="500"
        :typeSpeed="60"
      />
      <VueWriter
        :array="secondLine"
        :iterations="1"
        :start="1500"
        :typeSpeed="60"
      />
      <VueWriter
        :array="thirdLine"
        :iterations="1"
        :start="2200"
        :typeSpeed="60"
      />
      <p class="endH1">&lt;/h1&gt;</p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.writerWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.is-typed {
  font-weight: 200;
  font-size: 2.7rem;
  line-height: 95%;
  font-family: "Alfa Slab One", cursive;
  text-shadow: 6px 6px 2px rgb(0, 0, 0), 7px 7px 2px rgb(223, 212, 212);
  position: relative;
}
p {
  font-size: 0.7rem;
  font-family: "Pacifico", cursive;
  opacity: 0.5;
}
.startH1 {
  margin-right: auto;
}
.endH1 {
  margin-left: auto;
}
@media (min-width: 600px) {
  .is-typed {
    font-size: 4rem;
  }
  p {
    font-size: 1rem;
  }
}
@media (min-width: 900px) {
  .is-typed {
    font-size: 5rem;
  }
  p {
    font-size: 2rem;
  }
}
@media (min-width: 1200px) {
  .is-typed {
    font-size: 6rem;
  }
  p {
    font-size: 3rem;
  }
}
@media (min-width: 1720px) {
  .is-typed {
    font-size: 8rem;
  }
  p {
    font-size: 4rem;
  }
}
</style>
