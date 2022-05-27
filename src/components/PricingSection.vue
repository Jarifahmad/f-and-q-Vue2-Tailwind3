<template>
    <div class="flex justify-center">

        <slot name="pricing-header">

            <p class="flex h-10 justify-center text-4xl font-bold border-b-8 border-amber-300">A premium platform with mission-led pricing</p> <br>

        </slot>
        

        <slot name="free-forever">

        <div class="flex">
            <!--(left side of the pricing table) Free Forever-->

            <div class="flex flex-col min-w-0 min-h-0 bg-neutral-600 items-center p-10 content-center">
                <h1 class="flex justify-center text-white text-4xl font-bold m-6">Free Forever</h1>

                <div class="flex w-14 h-3 bg-amber-300 justify-center"></div>
                
                <p class="text-white flex justify-center m-10 text-lg text-center">For churches exploring the RaiseUp <br/> Platformm with no cost. </p>

                <p class="text-white flex justify-center text-lg">WHAT'S INCLUDED:</p>

                <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Unlimited trial period</p>

                <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Access to a selection of resources</p>

                <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Streaming & downloads of selected resources</p>

                <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Featured videos</p>
                
                <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 mb-10 border-cyan-300">No payment details required</p>

            </div>
        </div>

        </slot>

        <slot name="subscriber">

        <div>
        <!--(right side of the pricing table) Subscriber-->

        <div class="flex flex-col max-w-md min-h-0 bg-teal-600 items-center p-10">
            <h1 class="flex justify-center text-white text-4xl font-bold m-6">Subscriber</h1>

            <div class="flex w-14 h-3 bg-amber-300 justify-center"></div>
            
            <p class="text-white flex justify-center m-10 text-lg text-center">For churches who would like full access <br/> with plans starting at $25 / £17 per month. </p>

            <p class="text-white flex justify-center text-lg">WHAT'S INCLUDED:</p>

            <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Access to unlimited resources</p>

            <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Choose from 800+ lessons</p>

            <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Unlimited streaming & downloads of all content</p>

            <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Lesson editor and builder</p>
            
            <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 mb-10 border-cyan-300 text-center">Unlimited licence for use in your church</p>

        </div>
        </div>

        </slot>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>