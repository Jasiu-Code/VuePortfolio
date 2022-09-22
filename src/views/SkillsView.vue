<script setup>
import SkillsModal from "../components/SkillsModal.vue";
import { reactive, ref } from "vue";
import axios from "axios";
const state = reactive({
  currentName: null,
  showModal: false,
  currentImg: null,
  currentDescription: null,
});
const skills = ref([]);

function showItem(itemData) {
  state.showModal = true;
  state.currentName = itemData.title;
  state.currentImg = itemData.url;
  state.currentDescription = itemData.description;
}
const space_id = import.meta.env.VITE_SPACE_ID;
const environment_id = import.meta.env.VITE_ENVIRONMENT;
const access_token = import.meta.env.VITE_ACCESS_TOKEN;

const entries = axios.get(
  `https://cdn.contentful.com/spaces/${space_id}/environments/${environment_id}/entries?access_token=${access_token}`
);
const assets = axios.get(
  `https://cdn.contentful.com/spaces/${space_id}/environments/${environment_id}/assets?access_token=${access_token}`
);
axios
  .all([entries, assets])
  .then(
    axios.spread((...responses) => {
      const responseEntries = responses[0].data.items.map(
        (item) => item.fields
      );
      const responseAssets = responses[1].data.items.map((item) => item.fields);

      console.log(responses[1].data.items[0].fields);

      for (let i = 0; i < responseEntries.length; i++) {
        for (let j = 0; j < responseAssets.length; j++) {
          responseEntries[i].title.toUpperCase() ==
          responseAssets[j].title.toUpperCase()
            ? (responseEntries[i].url = "https:" + responseAssets[j].file.url)
            : null;
        }
      }
      skills.value = responseEntries;
    })
  )
  .catch((error) => console.log(error));
</script>

<template>
  <div class="skillsContainer">
    <div class="skill" v-for="skill in skills" :key="skill.title">
      <h2 @click="showItem(skill)">
        {{ skill.title }}
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
