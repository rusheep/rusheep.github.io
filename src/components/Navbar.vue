<template>
  <div class="nav-container">
    <ul class="nav">
      <a target="blank" href="https://www.facebook.com/yo0960797">
        <img class="icon" :src="facebook" alt="Facebook">
      </a>
      <a target="blank" href="https://www.instagram.com/ru_sheep/">
        <img class="icon" :src="instagram" alt="Instagram">
      </a>
      <a target="blank" href="">
        <img class="icon" :src="files" alt="files">
      </a>
    </ul>
  </div>
</template>

<script>
import Facebook from '../assets/img/facebook.png';
import Instagram from '../assets/img/instagram.png';
import Files from '../assets/img/files.png'

export default {
  computed: {
    facebook() {
      return Facebook;
    },
    instagram() {
      return Instagram;
    },
    files() {
      return Files;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/all";
  .logo {
    height: 50px;
  }

  .icon {
    height: 1.5em;
    margin-right: 20px;
  }

  .nav-container {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: $black;
    position: fixed;
    top: 0;
    z-index: 20;
    border-bottom: 2px solid $orange;
  }

  .nav {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    z-index: 10;
  }

  .nav-item {
    align-items: center;
    text-align: center;
    border-radius: 3px;
    display: block;
    /* border: 1px red solid; */
  }

  .nav-item a {
    font-weight: 600;
    color: $orange;
    padding: 15px;
    text-decoration: none;
  }

  .nav-item:hover {
    background-color: $light-blue;
  }

  .navbar-brand:hover {
    color: $black;
  }
</style>