<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const form = ref(null);
const inputFieldReset = ref(null);
const serviceName = import.meta.env.VITE_SERVICE_ID;
const templateName = import.meta.env.VITE_TEMPLATE_ID;
const publicKEY = import.meta.env.VITE_PUBLIC_KEY;

const sendMail = () => {
  emailjs.sendForm(serviceName, templateName, form.value, publicKEY).then(
    () => {
      alert("Message sent!");
      inputFieldReset.value = "";
    },
    (error) => {
      alert("Message not sent", error);
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
  color: var(--yellow);
  align-self: flex-start;
  font-family: "Alfa Slab One", cursive;
  text-shadow: 1px 1px 1px rgb(0, 0, 0), 2px 2px 1px rgb(223, 212, 212);
  margin-bottom: 5px;
}

.contactFormContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  width: 300px;
  height: 300px;

  transition-duration: 0.6s;
  padding: 10px;
  border: 5px solid var(--yellow);
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
input::placeholder {
  font-family: "Pacifico", cursive;
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
textarea::placeholder {
  font-family: "Pacifico", cursive;
}
textarea:invalid {
  border: 2px dashed red;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
  background: none;
  border: 3px solid var(--yellow);
  font-family: "Alfa Slab One", cursive;
  text-shadow: 1px 1px 1px rgb(0, 0, 0), 2px 2px 1px rgb(223, 212, 212);
  transition: 0.5 ease;
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
</style>
