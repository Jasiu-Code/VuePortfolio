<script setup lang="ts">
const firstLine: string[] = ["Hi! I'm Jasiu"];
const secondLine: string[] = ["front-end"];
const thirdLine: string[] = ["developer"];
</script>

<template>
  <main>
    <p class="startH1">&lt;h1&gt;</p>
    <VueWriter
      :array="firstLine"
      :iterations="1"
      :start="500"
      :typeSpeed="70"
    />
    <VueWriter
      :array="secondLine"
      :iterations="1"
      :start="1500"
      :typeSpeed="70"
    />
    <VueWriter
      :array="thirdLine"
      :iterations="1"
      :start="2200"
      :typeSpeed="70"
    />
    <p class="endH1">&lt;/h1&gt;</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
.is-typed {
  font-weight: 200;
  font-size: clamp(16px, 40px, 96px);
  line-height: 95%;
  font-family: "Alfa Slab One", cursive;
}
p {
  font-size: clamp(16px, 24px, 32px);
  font-family: "Pacifico", cursive;
  opacity: 0.5;
}
.startH1 {
  margin-left: -20px;
}
.endH1 {
  margin-left: auto;
}
@media (min-width: 600px) {
  .is-typed {
    font-size: clamp(24px, 60px, 96px);
  }
}
</style>
