<script setup>
import data from '../assets/data.json';
import SkillsModal from '../components/SkillsModal.vue';
import { ref } from 'vue';
const showModal = ref(true);
</script>
<template>
  <div class="skillsContainer">
    <div v-for="item in data" :key="item.id">
      <p>{{ item.name.toUpperCase() }}</p>
    </div>
  </div>
  <SkillsModal v-show="showModal" />
</template>

<style>
.skillsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
p {
  background: var(--grey);
  text-align: center;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 32px;
}
p:hover {
  transform: scale(1.05);
  transition: 0.3s ease;
}
</style>
