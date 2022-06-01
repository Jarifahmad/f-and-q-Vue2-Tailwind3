<template>
  <div class="slider">
    <button @click="prev" type="button" class="btn btn-left">
      <img src="../assets/left-arrow-black.png" class="icon" alt="left arrow">
    </button>
    
    <div class="container-slides" :style="{transform: `translateX(${index}px)`, transition: `${transition}`}">
      <img src="../assets/anime-pic.jpg" alt="carousel picture 1">
      <img src="../assets/painting-pic.jpg" alt="carousel picture 2">
      <img src="../assets/space-pic.jpg" alt="carousel picture 3">
    </div>
    <button @click="next" type="button" class="btn btn-right">
      <img src="../assets/right-arrow-black.png" class="icon" alt="right arrow">
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SliderSection',
    data (){
      return{
        index: 0,
        transition: "transform 0.2 ease"
      }
    },

    methods: {
      next(){
        if(this.index === -1500){
          this.index = 0;
        } else {
          this.index -= 500;
        }
      },
      prev(){
        if(this.index === -1500){
          this.index = 0;
        } else {
          this.index -= 500;
        }  
      }
    }
    
  }
</script>

<style scoped>
  .slider {
    width: 700px;
    height: 500px;
    margin: 100px auto 0;
    overflow: hidden;
    position: relative;
  }

  .container-slides{
    display: flex;
  }

  .img-slider{
    width: 100%;
    height: auto;
  }

  .btn{
    width: 50px;
    height: 50px;
    display: block;
    position: absolute;
    z-index: 1000;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 100px;
  }

  .btn-left{
    top: 50%;
    transform: translateY(-50%);
  }

  .btn-right{
    top: 50%;
    left: 650px;
    transform: translateY(-50%);
  }
</style>