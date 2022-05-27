<template>
  <div id="app">

    <NavBar />

    <HeaderSection/>

    <captioned-content> 
      <template #content>
        <div class="flex max-w-xl max-max-h-80">
          <img class="mt-4 bg-contain" src="https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png" alt="">
        </div>
      </template>
      <template #caption>
        Source: <a class="text-blue-900 underline" href="https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png">wallhaven</a>
      </template>
    </captioned-content> 

    <PricingSection/>

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
import CaptionedContent from './components/CaptionedContent.vue'
import NavBar from './components/NavBar.vue'
import PricingSection from './components/PricingSection.vue'



export default {
  name: 'App',
  components: {
    NavBar,
    HeaderSection,
    HeroSection,
    FandQ,
    FormSection,
    FooterSection,
    InputField,
    CaptionedContent,
<<<<<<< HEAD
=======
    PricingSection
>>>>>>> bace48c11c939d324709acdf35fb5ca41d50bcce
},

}
</script>

<style>

</style>
