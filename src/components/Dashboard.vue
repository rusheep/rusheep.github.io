<template>
    <div>
        <Navbar></Navbar>
        <main class="">
                <router-view></router-view>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'

export default {
    components:{
        Navbar,
        Footer,
    },

    name: 'Dashboard',

    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


