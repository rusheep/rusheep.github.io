<template>
  <div class="dashboard">
    <Navbar></Navbar>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  name: 'Dashboard',
  components:{
    Navbar,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/all";
  .dashboard {
    width: 100vw;
    height: 100vh;
    background-color: $main;
    overflow: hidden;
  }
  
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

