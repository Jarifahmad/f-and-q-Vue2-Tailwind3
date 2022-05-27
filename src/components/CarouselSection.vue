<template>
    <div class='carousel-view'>
        <transition-group class='carousel'>
        <div v-for="slide in slides" class='slide' :key="slide.id">
            <h4> {{ slide.title }} </h4>
        </div>

        </transition-group>

        <div class='carousel-controls'>
        <button class='text-white bg-blue-700 hover:bg-blue-800 rounded-full text-sm px-5 py-2.5 text-center mr-10' @click="previous">&#8592;</button>
        <button class='text-white bg-blue-700 hover:bg-blue-800 rounded-full text-sm px-5 py-2.5 text-center' @click="next">&#8594;</button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
    return {
      slides: [
        {
          title: 'I am Slide A',
          id: 1
        },
        {
          title: 'I am Slide B',
          id: 2
        },
        {
          title: 'I am Slide C',
          id: 3
        },
        {
          title: 'I am Slide D',
          id: 4
        },
        {
          title: 'I am Slide E',
          id: 5
        }
      ]
    }
  },

   methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>

<style>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  border: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  width: 1900px;
  min-height: 25em;
}
.slide {
    flex: 0 0 320px;
    height: 700px;
    width: 1000px;
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #000;
    border-radius: 0%;
    transition: transform 0.3s ease-in;
    border-style: solid;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
</style>