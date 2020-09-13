<template>
  <div>
    <h3>{{ title }}</h3>
    <img src="./assets/images/logo.svg" />    
    <div class="avatar"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: '从零开始手动搭建 vue 项目'
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  color: #333;
  transform: translate(100px, 100px);
}
.avatar {
  display: inline-block;
  width: 80px;
  height: 80px;
  background-image: url('./assets/images/avatar.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}
</style>