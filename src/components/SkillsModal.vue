<script setup lang="ts">
const props = defineProps({
  name: String,
  img: String,
  list: Array,
  description: String,
  link: String,
});
</script>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h1>{{ name }}</h1>
      <img :src="`${img}`" />
      <p class="description">
        {{ description }}
      </p>

      <ul v-for="item in list" :key="item">
        <li>{{ item }}</li>
      </ul>
      <a v-if="link" :href="`${link}`" target="_blank"
        >Check my webside done with {{ name }}</a
      >

      <button @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<style scoped>
a {
  position: absolute;
  top: 10px;
  left: 10px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(1, 1, 1, 0.8);
}

.modal {
  position: relative;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--grey);
  height: 500px;
  width: 500px;
  padding: 60px 10px;
  border-radius: 20px;
}
.description {
  background: white;
  font-size: 18px;
  overflow: scroll;
  margin-bottom: 10px;
}
button {
  cursor: pointer;
}
img {
  width: 90px;
  height: 90px;
  position: absolute;
  right: 10px;
  top: 10px;
}

button {
  background: var(--red);
  width: 150px;
  min-height: 30px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  border: none;
  margin-top: auto;
}
button:hover {
  transform: scale(1.05);
  transition: 0.3s ease;
}
</style>
