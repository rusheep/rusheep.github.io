<template>
  <div class="about">
    <div class="experince">
      <h2>學歷</h2>
      <h3>Yuan Ze University Information Management</h3>
    </div>
    <h2>個人特質</h2>
    <div class="personal-ablity">
      <div class="circle-l">
        <div class="circle-s-t" @click="TYPE1()">
          <h3>謹慎</h3>
        </div>
        <div class="circle-s-l" @click="TYPE2()">
          <h3>內向</h3>
        </div>
        <div class="circle-s-r" @click="TYPE3()">
          <h3>團隊</h3>
        </div>
        <div class="about-content-wrap">
          <div class="info" v-if="stage === STAGE.PROFILE">
            <span class="info-detail">Hi，我是陳友宣<br>元智大學資訊管理系畢業。
    因為受到本科系影響，在大學時就對前端程式產生濃厚的興趣，也在這段過程中不斷地透過線上課程自學培養了前端程式的觀念，希望能夠找到一份前端工程師的職位來發揮自己的長才。
            </span>
          </div>
          <div class="person-type" v-if="stage === STAGE.type1">
            <span class="person-type-detail">喜歡秩序、有條理、負責任、努力完成目標。</span>
          </div>
          <div class="person-type" v-if="stage === STAGE.type2">
            <span class="person-type-detail">性格內向，需要花比較多的心力在闡述自己的想法上，但也因此能夠更專注於自己份內的工作。</span>
          </div>
          <div class="person-type" v-if="stage === STAGE.type3">
            <span class="person-type-detail">樂於與團隊成員合作，重視團隊中的互相交流，對於委派的任務將盡心盡力完成。</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const STAGE = {
    PROFILE: 0,
    type1: 1,
    type2: 2,
    type3: 3
  }

  export default {
    data() {
      return{
        stage: STAGE.PROFILE,
        STAGE,
      };
    },
    methods: {
      TYPE1: function() {
        if(this.stage != 1) {
          this.stage = 1;
        }else if(this.stage == 1) {
          this.stage = 0;
        }
        return this.stage;
      },
      TYPE2: function() {
        if (this.stage != 2) {
          this.stage = 2;
        }else if (this.stage ==2) {
          this.stage = 0;
        }
        return this.stage;
      },
      TYPE3: function() {
        if (this.stage != 3) {
          this.stage = 3;
        }else if (this.stage ==3) {
          this.stage = 0;
        }
        return this.stage;
      },
    }
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
    align-items: flex-start;
  }

  .circle-l {
    width: 50vh;
    height: 50vh;
    border: dashed 5px $red;
    border-radius: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-s-t {
    width: 15vh;
    height: 15vh;
    border: dashed 5px $red;
    border-radius: 100%;
    background-color: $main;
    z-index: 10;
    position: absolute;
    right: 34%;
    top: -15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-s-t:hover {
    h3 {
      color: $main;
    }
    background-color: $light-blue;
  }

  .circle-s-l {
    width: 15vh;
    height: 15vh;
    border: dashed 5px $red;
    border-radius: 100%;
    background-color: $main;
    z-index: 10;
    position: absolute;
    right: 80%;
    top: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-s-l:hover {
    h3 {
      color: $main;
    }
    background-color: $light-blue;
  }

  .circle-s-r {
    width: 15vh;
    height: 15vh;
    border: dashed 5px $red;
    border-radius: 100%;
    background-color: $main;
    z-index: 10;
    position: absolute;
    right: -10%;
    top: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-s-r:hover { 
    h3 {
      color: $main;
    }
    background-color: $light-blue;
  }

  .about-content-wrap {
    width: 55%;
  }

  .info-detail {
    color: $light-blue;
  }

  .person-type-detail {
    color: $light-blue;
  }


  .personal-ability-item {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }

</style>
