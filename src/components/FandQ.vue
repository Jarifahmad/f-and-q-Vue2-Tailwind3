<template>
    
    <div class="shadow-2xl box-border h-20 w-20 p-4 border-4 border-teal-400 bg-teal-200">
        <h1>F&Q Component - Jarif</h1>

        <h2 class="text-sky-400"> test </h2> <!-- the color is supposed to change and the above is supposed to create a box border, but nothing is happening?-->

        <li>
            <button @click.prevent="answerToQuestion1 = ! answerToQuestion1">Question 1</button> <br>
            <p v-if="answerToQuestion1"> Answer to question 1 is blah blah </p>
            <br>

            <button @click.prevent="answerToQuestion2 = ! answerToQuestion2">Question 2</button> <br>
            <p v-if="answerToQuestion2"> Answer to question 2 is blah blah </p>
            <br>

            <button @click.prevent="answerToQuestion3 = !answerToQuestion3">Question 3</button> <br>
            <p v-if="answerToQuestion3"> Answer to question 3 is blah blah </p>
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