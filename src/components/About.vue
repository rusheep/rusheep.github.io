<template>
  <div class="about">
    <div class="info">
      <h3>你好，我是陳友宣，元智大學資訊管理系畢業，目前正在求職中。
因為受到本科系影響，在大學時就對後端程式產生濃厚的興趣，也在這段過程中不斷地透過
線上課程自學培養了前端程式的觀念，希望能夠找到一份前端工程師的職位來發揮自己的長才。
      </h3>
    </div>
    <div class="experince">
      <h2>學歷</h2>
      <h3>Yuan Ze University Information Management</h3>
    </div>
    <h2>個人特質</h2>
    <div class="personal-ablity">
      <div class="personal-ability-item">
        <h3>親和性</h3>
        <span>喜歡秩序、有條理、負責任、努力完成目標。</span>
      </div>
      <div class="personal-ability-item">
        <h3>有條理</h3>
        <span>喜歡秩序、有條理、負責任、努力完成目標。</span>
      </div>
      <div class="personal-ability-item">
        <h3>盡責性</h3>
        <span>喜歡秩序、有條理、負責任、努力完成目標。</span>
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

  h1 {
    font-size: 48px;
    color: #fff;
    margin: 0;
  }

  h3 {
    line-height: 2.0;
    margin: 0;
  }

  h2 {
    color: $orange;
  }

  .about {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: start;
  }

  .personal-ablity {
    width: 100%;  
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .personal-ablity {
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
  }

  .personal-ability-item {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }

</style>
