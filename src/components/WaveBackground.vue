<template>
  <div ref="main" class="main">
    <div
      ref="shapes"
      class="shapes"
      :class="`shape-${i - 1}`"
      v-for="i in 8"
      :key="i"
    >
      <img
        :src="`./src/assets/blob${i - 1}.svg`"
        width="300"
        alt=""
        unselectable="on"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main {
  top: 0;
  height: 100vh;
  width: 100%;
  position: fixed;
}
.shapes {
  position: absolute;
}
.shape-0 {
  left: -2%;
  top: -10%;
}
.shape-5 {
  left: 15%;
  top: 13%;
}
.shape-2 {
  right: 3%;
  bottom: 5%;
}
.shape-3 {
  right: 61%;
  bottom: 5%;
}
.shape-4 {
  right: 33%;
  bottom: 72%;
}
.shape-1 {
  right: 0%;
  top: -7%;
}
.shape-6 {
  left: 0%;
  bottom: -7%;
}
.shape-7 {
  left: 57%;
  bottom: -7%;
}
.main img {
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}
</style>
