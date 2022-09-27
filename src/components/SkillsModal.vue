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
  <Transition appear>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <h1>{{ name }}</h1>
        <img :src="`${img}`" />
        <p class="description">
          {{ description }}
        </p>

        <ul>
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
        <a v-if="link" :href="`${link}`" target="_blank"
          >Check my webside done with {{ name }}</a
        >

        <button @click="$emit('close-modal')">Close</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
p {
  margin: auto 0;
  padding: 0 20px;

  text-align: justify;
}
a {
  position: absolute;
  top: 10px;
  left: 10px;
  text-decoration: none;
  color: red;
}
ul {
  list-style: none;
  text-align: left;
}
li {
  position: relative;
}
li::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='green' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' /%3E%3C/svg%3E");
  position: absolute;
  width: 20px;
  left: -20px;
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
