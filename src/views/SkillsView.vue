<script setup>
import data from "../assets/data.json";
import SkillsModal from "../components/SkillsModal.vue";
import { reactive, ref } from "vue";
const state = reactive({
  currentName: null,
  showModal: false,
});

function showItem(itemData) {
  state.showModal = true;
  state.currentName = itemData.name;
  state.currentImg = itemData.img;
  state.currentDescription = itemData.description;
  console.log(itemData.img);
}
</script>
<template>
  <div class="skillsContainer">
    <div v-for="skill in data" :key="skill.id">
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
