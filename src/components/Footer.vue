<template>
    <div class="container">
        <footer class="">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <router-link class="nav-link px-2 text-muted" to="/home">
                    Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link px-2 text-muted" to="/about">
                    About
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link px-2 text-muted" to="/skills">
                    Skills
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link px-2 text-muted" to="/Protfolio">
                    Project
                    </router-link>
                </li>
            </ul>
            <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
    </div>
</template>

<style  scoped>
    .container {
        background-color: #252d40;
    }
</style>