<template>
    <!-- <div class="container">
        <div class="content">
            <div class="skills_header">
                <div>
                    <h1 class="skills_titles">Frontend developer</h1>
                    <span class="skills_subtitle">More than 1 years</span>
                </div>
            </div>
            <div class="skill_item">
                <h3>HTML</h3>
            </div>
        </div>
    </div> -->
    <div class="container">
        <div class="header">
            <div>
                <h1 class="skills_titles">Frontend developer</h1>
                <span class="skills_subtitle">More than 1 years</span>
            </div>
        </div>

        <div class="content">  
            <div class="skill_content">
                    <div class="skill_item">
                        <h3 class="skill_name">HTML</h3>
                        <span class="skill_info">HTML</span>
                    </div>

                    <div class="skill_item">
                        <h3 class="skill_name">CSSL</h3>
                        <span class="skill_info">HTML</span>
                    </div>

                    <div class="skill_item">
                        <h3 class="skill_name">JavaScript</h3>
                        <span class="skill_info">HTML</span>
                    </div>

                    <div class="skill_item">
                        <h3 class="skill_name">Vue2</h3>
                        <span class="skill_info">HTML</span>
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

    h1 {
        color: #fff;
    }

    h3 {
        color: gray;
    }
    .container {
        background-color:#252d40;
        text-align: center;
    }

    .skills_subtitle {
        color: gray;
    }

    .skill_content {
        display: flex;
        justify-content: center;
    }

    .skill_item {
        margin-top: 50px;
        margin-bottom: 20px;
        margin-left: 50px;
        margin-right: 50px;
    }
</style>