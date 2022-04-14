<template>
  <div class="skill">
    <div class="skill-title">
      <h1>專業技能</h1>
    </div>
    <div class="link">
      <div class="link-left"></div>
      <div class="link-right"></div>
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

  .link {
    width: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link-right {
    width: 30%;
    height: 15vh;
    border-right: 5px dashed $red;
    border-top: 5px dashed $red;
  }

  .link-left {
    width: 30%;
    height: 15vh;
    border-left: 5px dashed $red;
    border-right: 5px dashed $red;
    border-top: 5px dashed $red;
  }

  .skill {
    margin: 0;
    height: 100%;
    width: 100vh;
    display: flex;
    justify-content: start;
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
    height: 8vh;
    overflow: hidden;
    margin-right: 8px;
    margin-left: 8px;
    border:5px dashed $red;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    transition: 0.5s;
  }

  .skill-item:hover {
    height: 25vh;
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