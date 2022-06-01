<template>
  <div id="app">

    <NavBar />

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

    <captioned-content> 
      <template #content>
        <div class="">
          <img class="bg-contain" src="https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png" alt="">
        </div>
      </template>
      <template #caption>
        Source: <a class="text-blue-900 underline" href="https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png">wallhaven</a>
      </template>
    </captioned-content> 

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
import CarouselSection from './components/CarouselSection.vue'



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
    PricingSection,
    CarouselSection
},

}
</script>

<style>

</style>
