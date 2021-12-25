<template>
    <div class="container sticky-top">
        <div class="m-4">
            <img src="../assets/logo.png" alt="" class="logo">
        </div>
        <div class="m-4">
            <ul class="nav">
                <li class="nav-item">
                    <router-link class="navbar-brand" to="/home">
                    Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="navbar-brand" to="/about">
                    About
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="navbar-brand" to="/skills">
                    Skills
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="navbar-brand" to="/protfolio">
                    Project
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>


    .logo {
        height: 50px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        background-color: #252d40;
    }

    .navbar {
        display: flex;
        justify-content: flex-end;
    }

    .nav-item {
        align-items: center;
        text-align: center;
        border-radius: 10px;
        display: block;
        /* border: 1px red solid; */
    }

    .nav-item a {
        padding: 15px;
    }

    .nav-item:hover {
        background-color:#6f42c1;
    }

    .navbar-brand:hover {
        color: white;
    }
</style>