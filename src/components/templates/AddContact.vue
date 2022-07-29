<template>
<!--  <div-->
<!--      class="container"-->
<!--      :class="{-->
<!--              'grow': isAdd === true-->
<!--            }"-->
<!--  >-->

<!--  </div>-->
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 0;
  max-width: 500px;

  background-color: #f3f3f3;
  border-radius: 20px 20px 0 0;
  z-index: 10;
  transition-property: all;
  transition-duration: .3s;
}

.grow {
  height: 98.5vh;
  display: block;
  padding: 0 30px 30px 30px;
}
</style>