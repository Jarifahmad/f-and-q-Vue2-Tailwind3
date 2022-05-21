<template>
    
    <div class="flex flex-col items-center ">
        <h2 class="font-bold m-6 underline text-xl">Frequently asked question </h2>

        <div class="flex flex-col items-center box-border h-full w-full p-4 border-4 border-blue-400 bg-blue-300">
            <button @click.prevent="answerToQuestion1 = ! answerToQuestion1" class="rounded-full bg-white w-40">Question 1</button> <br>
            <p v-if="answerToQuestion1" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>
            <br>

            <button @click.prevent="answerToQuestion2 = ! answerToQuestion2" class="rounded-full bg-white w-40">Question 2</button> <br>
            <p v-if="answerToQuestion2" class="flex flex-cols-1 m-2"> Answer to question 2 is blah blah </p>
            <br>

            <button @click.prevent="answerToQuestion3 = !answerToQuestion3" class="rounded-full bg-white w-40">Question 3</button> <br>
            <p v-if="answerToQuestion3" class="flex flex-cols-1 m-2"> Answer to question 3 is blah blah </p>
        </div>

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