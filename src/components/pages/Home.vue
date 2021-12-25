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
            <div class="title">
                <h1>I'm Rusheep</h1>
                <div class="subtitle">
                    <h3 class="light">Front end Developer</h3>
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

<style scoped>
    .container {
        background-color:#252d40;
    }

    h1 {
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

</style>
