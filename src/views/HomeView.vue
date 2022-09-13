<script setup lang="ts">
const arr = ["Hi! I'm Jasiu"];
const arr1 = ['front-end'];
const arr2 = ['developer'];
</script>

<template>
  <main>
    <p class="start">&lth1&gt</p>
    <VueWriter
      class="mainText"
      :array="arr"
      :iterations="1"
      :start="500"
      :typeSpeed="70"
    />
    <VueWriter :array="arr1" :iterations="1" :start="2000" :typeSpeed="70" />
    <VueWriter
      :array="arr2"
      :iterations="1"
      :start="3000"
      :delay="1000"
      :typeSpeed="70"
    />
    <p class="end">&lt/h1&gt</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  padding: 10px;
}

.is-typed {
  font-weight: 200;
  font-size: clamp(16px, 40px, 96px);
  line-height: 90%;
  font-family: 'Alfa Slab One', cursive;
}
@media (min-width: 600px) {
  .is-typed {
    font-size: clamp(24px, 60px, 96px);
  }
}

p {
  font-size: clamp(16px, 24px, 32px);
  font-family: 'Pacifico', cursive;
  opacity: 0.5;
}
.start {
  transform: translateX(-20px);
}
.end {
  align-self: flex-end;
}
</style>
