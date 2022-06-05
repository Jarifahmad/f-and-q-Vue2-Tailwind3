<template>
<div>
    
    <div class="flex flex-row justify-around bg-zinc-100">
        <h2 class="font-bold m-6 text-3xl">Frequently asked question </h2>
    </div>

    <div class="flex flex-col bg-zinc-100">
        <div class="">
        <button @click.prevent="answerToQuestionOne = ! answerToQuestionOne" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="font-bold">What is your statement of faith?</p>
        <p v-show="answerToQuestionOne" class="m-2"> Answer to question 1 is blah blah </p>

        <button @click.prevent="answerToQuestionTwo = ! answerToQuestionTwo" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">How many of our staff and volunteers can use the RaiseUpFaith platform?</p>
        <p v-show="answerToQuestionTwo" class="flex flex-cols-1 m-2"> Answer to question 2 is blah blah </p>
            
        <button @click.prevent="answerToQuestionThree = !answerToQuestionThree" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">Can I live-stream RaiseUpFaith lessons?</p>
        <p v-show="answerToQuestionThree" class="flex flex-cols-1 m-2"> Answer to question 3 is blah blah </p>

        <button @click.prevent="answerToQuestionFour = ! answerToQuestionFour" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">Is the RaiseUpFaith platform available internationally?</p>
        <p v-show="answerToQuestionFour" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>

        <button @click.prevent="answerToQuestionFive = ! answerToQuestionFive" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">Can I access RaiseUpFaith on any device?</p>
        <p v-show="answerToQuestionFive" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>

        <button @click.prevent="answerToQuestionSix = ! answerToQuestionSix" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">Can I print and download RaiseUpFaith content?</p>
        <p v-show="answerToQuestionSix" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>
        </div>
        
    
        <div class="">
        <button @click.prevent="answerToQuestionSeven = ! answerToQuestionSeven" class="flex  items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">How long are the RaiseUpFaith lessons?</p>
        <p v-show="answerToQuestionSeven" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>

        <button @click.prevent="answerToQuestionEight = ! answerToQuestionEight" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">What if I don't have wifi?</p>
        <p v-show="answerToQuestionEight" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>

        <button @click.prevent="answerToQuestionNine = ! answerToQuestionNine" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">Do I need to use resources in any particular order?</p>
        <p v-show="answerToQuestionNine" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>

        <button @click.prevent="answerToQuestionTen = ! answerToQuestionTen" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">What materials do I need to run activites?</p>
        <p v-show="answerToQuestionTen" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p>

        <button @click.prevent="answerToQuestionEleven = ! answerToQuestionEleven" class="flex items-center rounded-full w-8 h-8 text-teal-600 bg-white m-3 p-2">+</button> 
        <p class="flex flex-row font-bold">Does RaiseUpFaith feature content from all around the world?</p>
        <p v-show="answerToQuestionEleven" class="flex flex-cols-1 m-2"> Answer to question 1 is blah blah </p> 
        </div>
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
          answerToQuestionFour: false,
          answerToQuestionFive: false,
          answerToQuestionSix: false,
          answerToQuestionSeven: false,
          answerToQuestionEight: false,
          answerToQuestionNine: false,
          answerToQuestionTen: false,
          answerToQuestionEleven: false,
      }
  },

}

</script>