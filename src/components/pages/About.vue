<template>
    <div class="container">
        <div class="header">
                <img src="../../assets/logo.png" alt="">
        </div>

        <div class="content">  
            <div class="about_title">
                <h1 class="title"> About Me</h1>
                <sapn class="subtitle">My introduction</sapn>
                <p class="about_description ">Web developer, with extensive knowledge.</p>
            </div>
            <div class="about_data">
                <div class="about_info">
                    <div>
                        <span class="about_info-title">08+</span>
                        <span class="about_info-name">Years <br> experience </span>
                    </div>

                    <div>
                        <span class="about_info-title">20+</span>
                        <span class="about_info-name">Completed <br> project </span>
                    </div>

                    <div>
                        <span class="about_info-title">05+</span>
                        <span class="about_info-name">Companies <br> worked </span>
                    </div>
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
        display: flex;
    }

    h1 {
        color: #fff;
    }

    h3 {
        color: gray;
    }

    .container {
        background-color:#252d40;
    }

    .content {
        margin-left: 300px;
    }

    .subtitle  {
        color: #fff;
    }

    .about_description {
        color: gray;
        margin-bottom: 50px;
    }

    .about_info-title {
        color: #fff;
    }

    .about_info-name {
        color: gray;
    }
</style>
