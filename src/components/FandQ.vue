<template>
    
    <div class="">
        <h2 class="">F&Q Section</h2>

        <li class="shadow-2xl box-border h-100 w-100 p-4 border-4 border-teal-400 bg-teal-200 h-60 columns-3xs ">
            <button @click.prevent="answerToQuestion1 = ! answerToQuestion1" class="rounded-full bg-pink-500 w-28">Question 1</button> <br>
            <p v-if="answerToQuestion1" class="grid-cols-1 mr-10"> Answer to question 1 is blah blah </p>
            <br>

            <button @click.prevent="answerToQuestion2 = ! answerToQuestion2" class="rounded-full bg-pink-500 w-28">Question 2</button> <br>
            <p v-if="answerToQuestion2" class="grid-cols-1 "> Answer to question 2 is blah blah </p>
            <br>

            <button @click.prevent="answerToQuestion3 = !answerToQuestion3" class="rounded-full bg-pink-500 w-28">Question 3</button> <br>
            <p v-if="answerToQuestion3" class="grid-cols-1 ml-8"> Answer to question 3 is blah blah </p>
            <p v-else> </p>
            
        </li>
    </div>
    

</template>

<script>

export default {
  data (){
      return{
          answerToQuestion1: false,
          answerToQuestion2: false,
          answerToQuestion3: false,
      }
  },

  methods:{
     showAnswer(){
        
     }
  }

}

</script>