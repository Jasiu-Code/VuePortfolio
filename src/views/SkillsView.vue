<script setup>
import data from '../assets/data.json';
import SkillsModal from '../components/SkillsModal.vue';
import { reactive, ref } from 'vue';
import { createClient } from 'contentful';
const state = reactive({
  currentName: null,
  showModal: false,
});

function showItem(itemData) {
  state.showModal = true;
  state.currentName = itemData.name;
  state.currentImg = itemData.img;
  state.currentDescription = itemData.description;
}

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: import.meta.env.VITE_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

client
  .getEntries()
  .then((response) => console.log(response.items))
  .catch(console.error);
</script>
<template>
  <div class="skillsContainer">
    <div class="skill" v-for="skill in data" :key="skill.id">
      <h2 @click="showItem(skill)">
        {{ skill.name.toUpperCase() }}
      </h2>
    </div>
    <SkillsModal
      :name="state.currentName"
      :img="state.currentImg"
      :description="state.currentDescription"
      v-show="state.showModal"
      @close-modal="state.showModal = false"
    />
  </div>
</template>

<style>
.skillsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.skill {
  animation: dropCard 1s linear 0s;
  backface-visibility: hidden;
}
@keyframes dropCard {
  0% {
    transform: rotateX(-180deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
h2 {
  background: var(--grey);
  text-align: center;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 32px;
}
h2:hover {
  transform: scale(1.1);
  transition: 0.3s ease;
  cursor: pointer;
}
</style>
