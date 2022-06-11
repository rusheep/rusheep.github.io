<template>
  <div class="container">
    <div class="content">
      <div class="home-wrap">
        <div class="home_title">
          <h1>陳友宣｜Rusheep</h1>
        </div>
        <div class="home_subtitle">
          <h3 class="subtitle">前端開發者｜Front-End Developer</h3>
        </div>
        <div class="home_detail">
          <div class="content-icon-wrap">
            <i class="fas fa-mobile-alt content-icon"></i>
          </div>
          <a href="tel:0908527987">0908527987</a>
        </div>
        <div class="home_detail">
          <div class="content-icon-wrap">
            <i class="fas fa-envelope content-icon"></i>
          </div>
          <a href="mailto:rising.moon.studio.tw@gmail.com">rising.moon.studio.tw@gmail.com</a>
        </div>
        <div class="home_detail">
          <div class="content-icon-wrap">
            <i class="fas fa-user-alt content-icon"></i>
          </div>
          <span>新北市鶯歌區育賢街27號</span>
        </div>
      </div>
      <div class="intro-wrap">
        <img
          v-if="stage > 0"
          class="arrow-icon arrow-up"
          :src="arrowUp"
          alt="arrowUp"
          @click="stage -= 1"
        >
        <div class="intro-container">
          <transition name="side" mode="out-in">
            <div
              v-if="stage === STAGE.PROFILE"
              class="profile-container"
            >
              <div class="profile">
                <img src="../../assets/img/profile3.jpg" alt="">
              </div>
              <div class="rect"></div>
            </div>
            <About class="profile-container" v-if="stage === STAGE.ABOUT" />
            <Skills class="profile-container" v-if="stage === STAGE.SKILL" />
          </transition>
        </div>
        <img
          v-if="stage < 2"
          class="arrow-icon arrow-down"
          :src="arrowDown"
          alt="arrowDown"
          @click="stage += 1"
        >
      </div>
    </div>
  </div>
</template>

<script>
import ArrowUp from '../../assets/img/arrow-up.png';
import ArrowDown from '../../assets/img/arrow-down.png';
import About from '../About.vue'
import Skills from '../Skills.vue'

// Enum
const STAGE = {
  PROFILE: 0,
  ABOUT: 1,
  SKILL: 2,
};

export default {
  components: {
    About,
    Skills,
  },
  data() {
    return{
      stage: STAGE.PROFILE,
      STAGE,
    };
  },
  computed: {
    arrowUp() {
      return ArrowUp;
    },
    arrowDown() {
       return ArrowDown;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/all";

  h1 {
    font-size: 48px;
    color: #fff;
    margin: 0;
  }

  h3 {
    line-height: 2.0;
    margin: 0;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transform: translateY(-4em);
    margin-top: 60px;
  }


  .social {
    display: flex;
    flex-direction: column;
    margin-right: 10%;
  }

  .content {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .home-wrap {
    flex-shrink: 0;
    margin-right: 5em;
  }

  .home_head {
    color: gray;
  }

  .subtitle {
    color: $orange;
  }

  .home_detail {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
  }

  .home_detail > span {
    color: $white;
    cursor: default;
  }

  .home_detail > a {
    color: $white;
    text-decoration: none;
    cursor: pointer;
  }

  .home_detail:hover {
    .content-icon {
      color: $orange;
    }
    span {
      color: $orange;
    }
    a {
      color: $orange;
    }
  }

  .content-icon-wrap {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: $light-blue;
    .content-icon {
      font-size: 25px;
    }
  }

  .intro-wrap {
    width: 40vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin-left: 30%;
    position: relative;
  }

  .intro-container {
    
  }

  .profile-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .profile {
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    overflow: hidden;
    transform: rotate(45deg);
    border: 6px solid $red;
    object-fit: cover;
  }

  .profile > img {
    filter: sepia(20%);
    width: 250px;
    height: 250px;
    transform: rotate(-45deg) scale(1.42);
  }

  .profile > img:hover {
    filter: sepia(0%);
  }

  .rect {
    width: 120px;
    height: 25px;
    background: $orange;
    z-index: 1;
  }

  .arrow-icon {
    height: 2rem;
    position: absolute;
    cursor: pointer;
  }

  .arrow-up {
    top: 15vh;
    transform: translateY(0px);
    animation: move-up 1s linear 0s infinite;
  }
  .arrow-down {
    bottom: 5vh;
    transform: translateY(0px);
    animation: move-down 1s linear 0s infinite;
  }

  @keyframes move-up {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes move-down {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(10px);
    }
  }

.side-enter-active,
.side-leave-active{
  transition: all .5s ease;
}
.side-enter-from {
  opacity: 0;
}
.side-leave-to {
  // transform: translateY(-60%);
  opacity: 0;
}
</style>
