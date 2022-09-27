<template>
  <Transition appear>
    <div class="about">
      <div class="textAbout">
        <h1>
          I am junior front-end developer.<br />
          This side was created using VUE3. <br />
          I started to learn web-development 1,5 year ago. If you want to
          contact me, or you have any remarks for this website please use
          contant form!
        </h1>
      </div>
      <img src="../assets/foto.png" alt="" />
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.about {
  display: flex;
  flex-direction: column;
}

.textAbout {
  width: 350px;
  color: var(--white);
  background-color: var(--grey);
  padding: 20px;
  border-radius: 20px;
  text-align: justify;
}
h1 {
  font-weight: 500;

  font-size: larger;
}
img {
  width: 200px;
  margin-left: auto;
}
</style>
