<template>
    <div class="grid grid-cols-2">

<!-- 
        <slot name="pricing-header">

            <h1 class=" font-bold text-5xl text-black text-center mb-6 border-b-8 border-amber-300 grid grid-cols-1">A premium platform with mission-led pricing</h1> 

        </slot>

        <slot name="pricing-description">
            <p class="grid justify-center max-w-3xl justify-items-center text-left text-lg m-auto text-black mt-4 mb-10">
            Our platform has accessible pricing plans for smaller and larger churches,
            as well as a Free Forever plan that won't cost a thing. So whether your church 
            has 5 children or 500, you can access the resources you need to raise up faith in the next generation.
            </p>
        </slot>
         -->

        <slot name="free-forever">

        <table class="grid justify-items-center">
            <ul class="grid bg-neutral-600 p-10 justify-items-center">
                <li>
                    <h1 class="text-white text-4xl font-bold m-6 ">Free Forever</h1>
                </li>
                <li>
                    <div class=" w-14 h-3 bg-amber-300 justify-center"></div>
                </li>

                <li>
                    <p class="text-white m-10 text-lg text-center">For churches exploring the RaiseUp <br/> Platformm with no cost. </p>
                </li>

                <li>
                    <p class="text-white text-lg">WHAT'S INCLUDED:</p>
                </li>

                <li>
                    <p class="grid justify-items-center text-white text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Unlimited trial period</p> 
                </li>

                <li>
                    <p class="grid justify-items-center text-white text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Access to a selection of resources</p>
                </li>

                <li>
                   <p class="text-white text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Streaming & downloads of <br/> selected resources</p> 
                </li>

                <li>
                    <p class="grid justify-items-center text-white text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Featured videos</p>
                </li>

                <li>
                    <p class="grid justify-items-center text-white text-base font-bold border-b-2 w-80 p-4 mb-8 border-cyan-300">No payment details required</p>
                </li>
            </ul>
        </table>

        </slot>

        <slot name="subscriber">

            <table class="grid justify-items-center">
                <ul class="grid justify-items-center bg-teal-600 p-0">
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

        </slot>
  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>