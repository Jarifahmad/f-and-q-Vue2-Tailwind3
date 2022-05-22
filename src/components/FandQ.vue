<template>
    
    <div class="flex flex-col items-center h-full">
        <h2 class="font-bold m-6 underline text-xl text-indigo-700">Frequently asked question </h2>

        <div class="flex flex-col items-center box-border h-full w-full p-4 border-4 border-blue-400 bg-blue-300">
            <button @click.prevent="answerToQuestionOne = ! answerToQuestionOne" class="rounded-full bg-white m-3 p-2">Question 1</button> 
            <p v-if="answerToQuestionOne" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>

            <button @click.prevent="answerToQuestionTwo = ! answerToQuestionTwo" class="rounded-full bg-white m-3 p-2">Question 2</button> 
            <p v-if="answerToQuestionTwo" class="flex flex-cols-1 m-2"> Answer to question 2 is blah blah </p>
            
            <button @click.prevent="answerToQuestionThree = !answerToQuestionThree" class="rounded-full bg-white m-3 p-2">Question 3</button> 
            <p v-if="answerToQuestionThree" class="flex flex-cols-1 m-2"> Answer to question 3 is blah blah </p>

        </div>

    </div>
    

</template>

<script>

export default {
  data (){
      return{
          answerToQuestionOne: false,
          answerToQuestionTwo: false,
          answerToQuestionThree: false,
      }
  },

}

</script>