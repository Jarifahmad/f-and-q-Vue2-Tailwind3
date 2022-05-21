<template>
  <div id="app">

    <HeaderSection/>

    <HeroSection/>

    <FandQ/>

    <FormSection />

    <FooterSection/> 

  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import FandQ from './components/FandQ.vue'
import FooterSection from './components/FooterSection.vue' 
import FormSection from './components/FormSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    FandQ,
    FormSection,
    FooterSection,

}
}
</script>

<style>

</style>
