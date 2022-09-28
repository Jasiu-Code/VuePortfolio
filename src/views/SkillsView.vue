<script setup>
import SkillsModal from '../components/SkillsModal.vue';
import { reactive, ref } from 'vue';
import axios from 'axios';
const state = reactive({
  currentName: null,
  showModal: false,
  currentImg: null,
  currentList: [],
  currentDescription: null,
  currentLink: null,
});
const skills = ref([]);

function showItem(itemData) {
  state.showModal = true;
  state.currentName = itemData.title;
  state.currentImg = itemData.url;
  state.currentList = itemData.list;
  state.currentDescription = itemData.description;
  state.currentLink = itemData.link;
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

      for (let i = 0; i < responseEntries.length; i++) {
        for (let j = 0; j < responseAssets.length; j++) {
          responseEntries[i].title.toUpperCase() ==
          responseAssets[j].title.toUpperCase()
            ? (responseEntries[i].url = 'https:' + responseAssets[j].file.url)
            : null;
        }
      }
      skills.value = responseEntries;
    })
  )
  .catch((error) => console.log(error));

function openNewPage(link) {
  window.open(`${link}`);
}
</script>

<template>
  <div class="skillsContainer">
    <div class="skill" v-for="skill in skills" :key="skill.title">
      <h2 @click="showItem(skill)">
        {{ skill.title.toUpperCase() }}
      </h2>
      <div
        class="iconContainer"
        v-if="skill.link"
        @click="openNewPage(skill.link)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </div>
    </div>
    <SkillsModal
      :name="state.currentName"
      :img="state.currentImg"
      :list="state.currentList"
      :description="state.currentDescription"
      :link="state.currentLink"
      v-show="state.showModal"
      @close-modal="state.showModal = false"
    />
  </div>
</template>

<style>
.iconContainer {
  width: 25px;
  position: absolute;
  top: 3px;
  right: 3px;
}
.iconContainer:hover {
  color: red;
}
.skillsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.skill {
  animation: dropCard 0.6s ease 0s;
  background: var(--grey);
  text-align: center;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  position: relative;
}
@media (min-width: 600px) {
  .skill {
    font-size: 24px;
  }
}
.skill:hover {
  transform: scale(1.1);
  transition: 0.3s ease;
  cursor: pointer;
}
@keyframes dropCard {
  0% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
/* h2 {
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
} */
</style>
