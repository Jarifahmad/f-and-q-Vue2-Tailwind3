<template>
  <div id="app">

    <HeaderSection/>

    <BaseButton />

    <base-button></base-button>

    <HeroSection/>

    <FandQ/>

    <FormSection /> 
    
    <input-field></input-field>
    
    <FooterSection/> 

  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import FandQ from './components/FandQ.vue'
import FooterSection from './components/FooterSection.vue' 
import FormSection from './components/FormSection.vue'
import InputField from './components/InputField.vue'
import BaseButton from './components/BaseButton.vue'


export default {
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    FandQ,
    FormSection,
    FooterSection,
    InputField,
    BaseButton,
}
}
</script>

<style>

</style>
