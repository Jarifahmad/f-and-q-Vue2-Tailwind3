<template>
  <div id="app">

    <BurgerMenu/>

    <NavBar/>

    <HeroSection/>

    <FandQ/>

    <FooterSection/> 

  </div>
</template>

<script>
import BurgerMenu from './components/BurgerMenu.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FandQ from './components/FandQ.vue'
import FooterSection from './components/FooterSection.vue'


export default {
  name: 'App',
  components: {
    BurgerMenu,
    NavBar,
    HeroSection,
    FandQ,
    FooterSection,

}
}
</script>

<style>

</style>
