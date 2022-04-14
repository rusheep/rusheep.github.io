<template>
  <div id="app" class="app">
    <Navbar></Navbar>
    <main class="main">
      <router-view/>  
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar,
  },
}
</script>


<style lang="scss" scoped>
  @import "./assets/style/all";

  .app {
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