<template>
  <div id="app">

    <HeaderSection/>

    <captioned-content> 
      <template #content>
        <div class="flex max-w-xl h-60">
          <img class="mt-4 bg-contain" src="https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png" alt="">
        </div>
      </template>
      <template #caption>
        Source: <a class="text-blue-900 underline" href="https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png">wallhaven</a>
      </template>
    </captioned-content> 

    <captioned-content> 
      <template #content>
        <div class="flex max-w-xl h-60">
          <img class="mt-4" src="https://w.wallhaven.cc/full/dp/wallhaven-dpo38l.jpg" alt="">
        </div>
      </template>
      <template #caption>
        Source: <a class="text-blue-900 underline" href="https://w.wallhaven.cc/full/dp/wallhaven-dpo38l.jpg">wallhaven</a>
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


export default {
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    FandQ,
    FormSection,
    FooterSection,
    InputField,
    CaptionedContent
}
}
</script>

<style>

</style>
