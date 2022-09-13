<script>
export default {};
</script>

<template>
  <div class="modal-overlay">
    <div class="modal">
      <h1>HTML</h1>
      <p class="description">
        Desciption Desciption Desciption Desciption Desciption Desciption
        Desciption Desciption
      </p>
      <button>Close</button>
    </div>
  </div>
</template>

<style scoped>
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
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--grey);
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.description {
  background: white;
  font-size: 18px;
}
button {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
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
