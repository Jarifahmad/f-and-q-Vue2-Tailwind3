<template>
    <div class="flex justify-center">

        <slot name="pricing-header">

            <p class="flex h-10 justify-center text-4xl font-bold border-b-8 border-amber-300">A premium platform with mission-led pricing</p> <br>

        </slot>
        

        <slot name="free-forever">

        <table class="flex">
            <ul class="flex flex-col min-w-0 min-h-0 bg-neutral-600 items-center p-10 content-center">
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