<template>
  <div id="app">

    <NavBar />

    <PricingHeader/>

    <pricing-section>
      <template #pricing-header>

      </template>

      <template #pricing-description>

      </template>

      <template #free-forever>
        
      </template>

      <template #subscriber>

      </template>
    </pricing-section>

    <CarouselSection />

    <HeaderSection/>

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
import NavBar from './components/NavBar.vue'
import PricingSection from './components/PricingSection.vue'
import PricingHeader from './components/PricingHeader.vue'



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
    PricingSection,
    PricingHeader
},

}
</script>

<style>

</style>
