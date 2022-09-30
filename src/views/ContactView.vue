<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const form = ref(null);
const inputFieldReset = ref(null);
const openModal = ref(false);
const message = ref(null);
const serviceName = import.meta.env.VITE_SERVICE_ID;
const templateName = import.meta.env.VITE_TEMPLATE_ID;
const publicKEY = import.meta.env.VITE_PUBLIC_KEY;

const sendMail = () => {
  emailjs.sendForm(serviceName, templateName, form.value, publicKEY).then(
    () => {
      message.value = 'Thank you! I will respond soon.';
      openModal.value = true;
      inputFieldReset.value = '';
    },
    (error) => {
      message.value =
        "I'm sorry something went wrong! Contact me directly: jan@kaletka.com.pl";
      openModal.value = true;
      inputFieldReset.value = '';
    }
  );
};
</script>
<template>
  <Transition appear>
    <div class="contactFormContainer">
      <form ref="form" @submit.prevent="sendMail">
        <label for="name">Name:</label>
        <input
          name="from_name"
          id="name"
          type="text"
          :value="inputFieldReset"
          required
        />
        <label for="email">Email:</label>
        <input
          name="reply_to"
          id="email"
          type="email"
          :value="inputFieldReset"
          required
        />
        <label for="message">Message:</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          cols="30"
          minlength="10"
          maxlength="200"
          :value="inputFieldReset"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </Transition>
  <div v-if="openModal" class="emailModal">
    <h2>{{ message }}</h2>
    <button @click="openModal = false">Close</button>
  </div>
</template>

<style scoped>
.contactFormContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  width: 300px;
  height: 350px;
  padding: 10px;
}

.emailModal {
  position: absolute;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
  z-index: 5;
  background: black;
  padding: 30px;
  border-radius: 20px;
  border: 5px solid var(--orange);
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

h1,
label {
  color: var(--yellow);
  align-self: flex-start;
  font-family: 'Alfa Slab One', cursive;
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
  letter-spacing: 1px;
  margin-bottom: 5px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input {
  width: 250px;
  margin-bottom: 10px;
  padding: 5px;
  border: none;
}
input:invalid {
  border: 2px dashed red;
}

textarea {
  width: 250px;
  height: 70px;
  padding: 5px;
  resize: none;
  border: none;
}
textarea:invalid {
  border: 2px dashed red;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
  background: none;
  border: 1px solid var(--white);
  font-weight: bold;
  font-family: 'Alfa Slab One', cursive;
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
  font-size: 16px;
  letter-spacing: 1px;
  transition: 0.5 ease;
  cursor: pointer;
}
button:hover {
  transform: scale(1.1);
}
@media (min-width: 600px) {
  .contactFormContainer {
    width: 400px;
    height: 400px;
  }
  textarea {
    width: 300px;
    height: 100px;
  }
  input {
    width: 300px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
