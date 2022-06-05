<template>
    <div>

        <div class="flex flex-row justify-center">
        <slot name="free-forever">

        <table class="max-w-md flex">
            <ul class="justify-center  bg-neutral-600 p-8 text-center">
                <li>
                    <h1 class="flex justify-center text-white text-4xl font-bold m-6 ">Free Forever</h1>
                </li>
                
                <li class="bg-amber-300 w-14 h-3"></li>

                <li>
                    <p class="text-white m-10 text-lg text-center">For churches exploring the RaiseUp <br/> Platformm with no cost. </p>
                </li>

                <li>
                    <p class="text-white text-lg text-center">WHAT'S INCLUDED:</p>
                </li>

                <li>
                    <p class=" justify-items-center text-white text-base font-bold border-b-2 p-4 border-cyan-300">Unlimited trial period</p> 
                </li>

                <li>
                    <p class=" justify-items-center text-white text-base font-bold border-b-2 p-4 border-cyan-300">Access to a selection of resources</p>
                </li>

                <li>
                   <p class="text-white text-base font-bold border-b-2 p-4 border-cyan-300 text-center">Streaming & downloads of <br/> selected resources</p> 
                </li>

                <li>
                    <p class=" justify-items-center text-white text-base font-bold border-b-2 p-4 border-cyan-300">Featured videos</p>
                </li>

                <li>
                    <p class=" justify-items-center text-white text-base font-bold border-b-2 text-center p-4 border-cyan-300">No payment details required</p>
                </li>
            </ul>
        </table>

        </slot>
        


        <slot name="subscriber">

        <table class="max-w-md ">
            <ul class="bg-teal-600 p-8 justify-items-center text-center">
                <li>
                    <h1 class="flex justify-center text-white text-4xl font-bold m-6 ">Subscriber</h1>
                </li>
                <li>
                    <div class="flex justify-center w-14 h-3 bg-amber-300"></div>
                </li>

                <li>
                   <p class="text-white my-10 text-center text-lg ">For churches who would like full access, <br> with plans starting at $25 / £17 per month. </p>
                </li>

                <li>
                    <p class="text-white text-lg">WHAT'S INCLUDED:</p>
                </li>

                <li>
                    <p class=" justify-items-center text-white text-base font-bold border-b-2 p-4 border-cyan-300">Access to unlimited resources</p> 
                </li>

                <li>
                    <p class=" justify-items-center text-white text-base font-bold border-b-2 p-4 border-cyan-300">Choose from 800+ lessons</p>
                </li>

                <li>
                   <p class="text-white text-base font-bold border-b-2 p-4 border-cyan-300 text-center">Unlimited streaming & downloads <br>of all content</p> 
                </li>

                <li>
                    <p class=" justify-items-center text-white text-base font-bold border-b-2 p-4 border-cyan-300">Lesson editor and builder</p>
                </li>

                <li>
                    <p class=" justify-items-center text-white text-base font-bold border-b-2 p-4 mb-2 border-cyan-300">Unlimited licence for use in your <br>church</p>
                </li>
            </ul>
        </table>

        </slot>
        </div>

        

        <!--
                        <table class="flex justify-center">
                <ul class="flex  justify-items-center bg-teal-600 ">
                    <li>
                        <h1 class="text-white text-4xl font-bold m-6">Subscriber</h1>
                    </li>
                    <li>
                        <div class="w-14 h-3 bg-amber-300 justify-center"></div>
                    </li>

                    <li>
                        <p class="text-white m-10 text-lg text-center">For churches who would like full access, <br/> with plans starting at $25 / £17 per month. </p>
                    </li>

                    <li>
                        <p class="text-white text-lg">WHAT'S INCLUDED:</p>
                    </li>

                    <li>
                         <p class="text-white text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Access to unlimited resources</p>
                    </li>

                    <li>
                        <p class="text-white text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Choose from 800+ lessons</p>
                    </li>

                    <li>
                        <p class="text-white text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Unlimited streaming & downloads of all content</p>
                    </li>

                    <li>
                        <p class="text-white text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Lesson editor and builder</p>
                    </li>

                    <li>
                        <p class="text-white text-base font-bold border-b-2 w-80 p-4 mb-10 border-cyan-300 text-center">Unlimited licence for use in your church</p>
                    </li>
                </ul>
        </table>
        -->
  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>