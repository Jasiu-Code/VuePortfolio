<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const form = ref(null);
const inputFieldReset = ref(null);
const serviceName = import.meta.env.VITE_SERVICE_ID;
const templateName = import.meta.env.VITE_TEMPLATE_ID;
const publicKEY = import.meta.env.VITE_PUBLIC_KEY;

const sendMail = () => {
  emailjs.sendForm(serviceName, templateName, form.value, publicKEY).then(
    () => {
      alert('Message sent!');
      inputFieldReset.value = '';
    },
    (error) => {
      alert('Message not sent', error);
    }
  );
};
</script>
<template>
  <Transition appear>
    <div class="contactFormContainer">
      <h1>Let me know!</h1>
      <form ref="form" @submit.prevent="sendMail">
        <label for="name">Name:</label>
        <input
          name="from_name"
          id="name"
          type="text"
          placeholder="Your name:"
          :value="inputFieldReset"
          required
        />
        <label for="email">Email:</label>
        <input
          name="reply_to"
          id="email"
          type="email"
          placeholder="Your email:"
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
          placeholder="Message:"
          :value="inputFieldReset"
          required
        ></textarea>
        <button type="submit">Send!</button>
      </form>
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
h1,
label {
  color: var(--grey);
}
label {
  align-self: flex-start;
}
.contactFormContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--yellow);
  width: 300px;
  height: 300px;
  border-radius: 20px;
  transition-duration: 0.6s;
  padding: 10px;
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
  border-radius: 10px;
  border: none;
}
input::placeholder {
  font-family: 'Pacifico', cursive;
}
input:invalid {
  border: 2px dashed red;
}

textarea {
  width: 250px;
  height: 70px;
  padding: 5px;
  resize: none;
  border-radius: 10px;
  border: none;
}
textarea::placeholder {
  font-family: 'Pacifico', cursive;
}
textarea:invalid {
  border: 2px dashed red;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
  background: var(--grey);
  border: none;
  border-radius: 10px;
  transition: 0.5 ease;
}
button:hover {
  transform: scale(1.1);
}
@media (min-width: 600) {
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
</style>
