<template>
  <div class="skill">
    <div class="skill-title">
      <h1>專業技能</h1>
    </div>
    <div class="skill-wrap">
      <div class="skill-item">
        <h2 class="skill-name">Language</h2>
        <div class="skill-item-wrap">
          <span class="skill-info">HTML</span>
          <span class="skill-info">CSS</span>
          <span class="skill-info">Noed.js</span>
          <span class="skill-info">Vue2</span>
        </div>
      </div>
      <div class="skill-item">
        <h2 class="skill-name">Tool</h2>
        <div class="skill-item-wrap">
          <span class="skill-info">NPM</span>
          <span class="skill-info">Github(git)</span>
        </div>
      </div>
      <div class="skill-item">
        <h2 class="skill-name">Domain Knowledge</h2>
        <div class="skill-item-wrap">
          <span class="skill-info">API</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{

      };
    },
  }
</script>

<style lang="scss" scoped>
@import "../assets/style/all";

  h2 {
    color: $orange;
  }

  .skill {
    margin: 0;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skill-title {
    h1 {
      font-size: 48px;
    } 
  }

  .skill-wrap  {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  .skill-item {
    width: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skill-item-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skill-info {
    color: $light-blue;
  }

</style>