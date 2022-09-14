<script setup></script>
<template>
  <div class="contactFormContainer">
    <h1>Let me know!</h1>
    <form>
      <input type="text" placeholder="Your name:" />
      <input type="text" placeholder="Your email:" />
      <textarea rows="5" cols="30" placeholder="Message:"></textarea>
      <button type="submit">Send it!</button>
    </form>
  </div>
</template>

<style scoped>
.contactFormContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--yellow);
  width: 380px;
  height: 350px;
  border-radius: 20px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input {
  width: 300px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 10px;
  border: none;
}
input::placeholder {
  font-family: "Pacifico", cursive;
}
textarea {
  width: 300px;
  height: 100px;
  padding: 5px;
  resize: none;
  border-radius: 10px;
  border: none;
}
textarea::placeholder {
  font-family: "Pacifico", cursive;
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
</style>
