<script setup>
const firstLine = [" I'm Jasiu"];
const secondLine = ['front-end'];
const thirdLine = ['deloper', 'developer'];
const fourthLine = ['Hi!'];
</script>

<template>
  <main>
    <div class="writerWrapper">
      <Transition appear>
        <p>&lt;h1&gt;</p>
      </Transition>
      <div style="display: flex">
        <VueWriter
          :array="fourthLine"
          :iterations="1"
          :start="100"
          :typeSpeed="50"
        />
        <VueWriter
          :array="firstLine"
          :iterations="1"
          :start="500"
          :typeSpeed="50"
        />
      </div>
      <VueWriter
        :array="secondLine"
        :iterations="1"
        :start="1300"
        :typeSpeed="50"
      />
      <VueWriter
        :array="thirdLine"
        :iterations="1"
        :start="1900"
        :typeSpeed="40"
        :eraseSpeed="30"
        :delay="150"
      />
      <Transition appear>
        <p style="margin-left: auto">&lt;/h1&gt;</p>
      </Transition>
    </div>
  </main>
</template>

<style scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
}
.writerWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.is-typed {
  font-family: 'Alfa Slab One', cursive;
  font-size: 2.7rem;
  font-weight: 200;
  letter-spacing: 1px;
  line-height: 95%;
  position: relative;
  text-shadow: 5px 5px 2px rgb(0, 0, 0), 7px 7px 4px rgb(223, 212, 212);
}
p {
  font-size: 1rem;
  font-family: 'Pacifico', cursive;
  opacity: 0.7;
}
@media (min-width: 600px) {
  .is-typed {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
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
@media (min-width: 1700px) {
  .is-typed {
    font-size: 8rem;
  }
  p {
    font-size: 4rem;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease 3.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
