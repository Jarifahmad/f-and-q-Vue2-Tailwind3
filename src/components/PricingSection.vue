<template>
    <div class="mb-8 mt-16 lg:px-0 mx-auto overflow-hidden">

        <slot name="pricing-header">

            <h1 class="flex-col font-bold text-5xl text-black text-center mb-6 border-b-8 border-amber-300  ">A premium platform with mission-led pricing</h1> <br>

        </slot>
        <!--border-b-8 border-amber-300-->

        <p class="max-w-3xl text-lg m-auto text-black mt-4 mb-10 relative flex-col">
            Our platform has accessible pricing plans for smaller and larger churches,
            as well as a Free Forever plan that won't cost a thing. So whether your church 
            has 5 children or 500, you can access the resources you need to raise up faith in the next generation.
        </p>

        <slot name="free-forever">

        <table class="flex">
            <ul class="flex-col bg-neutral-600 items-center p-10 ">
                <li>
                    <h1 class="flex justify-center text-white text-4xl font-bold m-6">Free Forever</h1>
                </li>
                <li>
                    <div class="flex w-14 h-3 bg-amber-300 justify-center"></div>
                </li>

                <li>
                    <p class="text-white flex justify-center m-10 text-lg text-center">For churches exploring the RaiseUp <br/> Platformm with no cost. </p>
                </li>

                <li>
                    <p class="text-white flex justify-center text-lg">WHAT'S INCLUDED:</p>
                </li>

                <li>
                    <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Unlimited trial period</p> 
                </li>

                <li>
                    <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Access to a selection of resources</p>
                </li>

                <li>
                   <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Streaming & downloads of selected resources</p> 
                </li>

                <li>
                    <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Featured videos</p>
                </li>

                <li>
                    <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 mb-10 border-cyan-300">No payment details required</p>
                </li>
            </ul>
        </table>

        </slot>

        <slot name="subscriber">

            <table class="flex">
                <ul class="flex flex-col min-w-0 min-h-0 bg-teal-600 items-center p-10">
                    <li>
                        <h1 class="flex justify-center text-white text-4xl font-bold m-6">Free Forever</h1>
                    </li>
                    <li>
                        <div class="flex w-14 h-3 bg-amber-300 justify-center"></div>
                    </li>

                    <li>
                        <p class="text-white flex justify-center m-10 text-lg ">For churches who would like full access, <br/> with plans starting at $25 / £17 per month. </p>
                    </li>

                    <li>
                        <p class="text-white flex justify-center text-lg">WHAT'S INCLUDED:</p>
                    </li>

                    <li>
                         <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Access to unlimited resources</p>
                    </li>

                    <li>
                        <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Choose from 800+ lessons</p>
                    </li>

                    <li>
                        <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300 text-center">Unlimited streaming & downloads of all content</p>
                    </li>

                    <li>
                        <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 border-cyan-300">Lesson editor and builder</p>
                    </li>

                    <li>
                        <p class="text-white flex justify-center text-base font-bold border-b-2 w-80 p-4 mb-10 border-cyan-300 text-center">Unlimited licence for use in your church</p>
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