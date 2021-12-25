<template>
    <div class="container">
        <div class="content">
            <div class="social-icon">
                <a href="">
                    <i class="fab fa-facebook icon"></i>
                </a>
                <a href="">
                    <i class="fab fa-twitter icon"></i>
                </a>
                <a href="">
                    <i class="fab fa-instagram icon"></i>
                </a>
            </div>
            <div class="home_head">
                <div class="home_title">
                    <h1>I'm Rusheep</h1>
                </div>
                <div class="home_subtitle">
                    <h3 class="light">Front end Developer</h3>
                </div>
                <div class="home_detail">
                    <i class="fas fa-mobile-alt"></i>
                    <span>0908527987</span>
                </div>
                <div class="home_detail">
                    <i class="fas fa-envelope"></i>
                    <span>yo0983987618@gmail.com</span>
                </div>
                <div class="home_detail">
                    <i class="fas fa-user-alt"></i>
                    <span>新北市鶯歌區育賢街27號</span>
                </div>
            </div>
            <div class="photo">
                <img src="../../assets/sheep.png" alt="">
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

<style scoped>
    .container {
        background-color:#252d40;
    }

    h1 {
        font-size: 64px;
        color: #fff;
    }

    h3 {
        color: gray;
    }

    .content {
        display: flex;
    }

    .social-icon {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 100px;
        margin-top: 100px;
    }

    .icon {
        margin: 30px;
        color: gray;
    }

    .icon:hover {
         color: #6f42c1;
    }

    .home_head {
        color: gray;
    }

    .home_detail {
        margin-top: 20px;
    }

    .photo {
        margin-top: 300px;
        margin-left: 150px;
    }

</style>
