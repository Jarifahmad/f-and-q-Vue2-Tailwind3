<template>
<div>
    
    <div class="flex flex-row justify-around bg-zinc-100">
        <h2 class="font-bold m-6 text-3xl">Frequently asked question </h2>
    </div>

    <div class="bg-zinc-100 flex justify-center flex-wrap">
        <ul class="">
            <section class="">
            <li><span><button @click.prevent="answerToQuestionOne = ! answerToQuestionOne" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">What is your statement of faith?</span>
            <p v-show="answerToQuestionOne" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionTwo = ! answerToQuestionTwo" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">How many of our staff and volunteers can use the RaiseUpFaith platform?</span>
            <p v-show="answerToQuestionTwo" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionThree = ! answerToQuestionThree" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">Can I live-stream RaiseUpFaith lessons?</span>
            <p v-show="answerToQuestionThree" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionFour = ! answerToQuestionFour" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">Is the RaiseUpFaith platform available internationally?</span>
            <p v-show="answerToQuestionFour" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionFive = ! answerToQuestionFive" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">Can I access RaiseUpFaith on any device?</span>
            <p v-show="answerToQuestionFive" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionSix = ! answerToQuestionSix" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">Can I print and download RaiseUpFaith content?</span>
            <p v-show="answerToQuestionSix" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>
            </section>

    <br>
            <section class="">
            <li><span><button @click.prevent="answerToQuestionSeven = ! answerToQuestionSeven" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">How long are the RaiseUpFaith lessons?</span>
            <p v-show="answerToQuestionSeven" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionEight = ! answerToQuestionEight" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">What if I don't have wifi?</span>
            <p v-show="answerToQuestionEight" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionNine = ! answerToQuestionNine" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">Do I need to use resources in any particular order?</span>
            <p v-show="answerToQuestionNine" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionTen = ! answerToQuestionTen" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">What materials do I need to run activites?</span>
            <p v-show="answerToQuestionTen" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>

            <li><span><button @click.prevent="answerToQuestionEleven = ! answerToQuestionEleven" class="text-2xl rounded-full w-8 h-8 text-teal-600 bg-white m-3">+</button></span>
            <span class="font-bold">Does RaiseUpFaith feature content from all around the world?</span>
            <p v-show="answerToQuestionEleven" class="m-2 flex justify-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae. </p>
            </li>
            </section>
        </ul>
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