<script setup>
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
    <div class="modalOverlay" @click="$emit('closeModal')">
      <div class="modal" @click.stop>
        <h3>{{ name }}</h3>
        <img :src="`${img}`" />
        <p class="description">
          {{ description }}
        </p>

        <ul>
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>

        <div v-if="link" class="iconWrapper" @click="$emit('openLink')">
          My work:
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
        <button @click="$emit('closeModal')">Close</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modalOverlay {
  align-items: center;
  background-color: var(--yellow);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}
.modal {
  align-items: center;
  background-color: #d0cfcf;
  border-radius: 20px;
  color: var(--black);
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  padding: 60px 10px;
  position: relative;
  text-align: center;
  width: 500px;
}
h3 {
  font-size: 2rem;
  font-weight: bold;
}

img {
  width: 90px;
  height: 90px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.description {
  font-size: 18px;
  overflow: scroll;
  margin-bottom: 10px;
  text-align: justify;
  padding: 0 20px;
  margin-top: auto;
}
ul {
  margin-top: auto;
  margin-bottom: auto;
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

.iconWrapper {
  width: 70px;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-weight: bold;
}

button {
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 20px;
  color: black;
  background: none;
  border: 1px solid black;
  font-weight: bold;
  font-family: "Alfa Slab One", cursive;
  font-size: 16px;
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
  letter-spacing: 1px;
  transition: 0.5 ease;
  cursor: pointer;
}
button:hover {
  transform: scale(1.1);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
