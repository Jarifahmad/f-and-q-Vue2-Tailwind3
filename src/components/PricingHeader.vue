<template>
    <div class="grid">
        <slot name="pricing-header">
            <h1 class=" font-bold text-5xl text-black text-center mb-6 border-b-8 border-amber-300 mt-2">A premium platform with mission-led pricing</h1> 
        </slot>

        <slot name="pricing-description">
            <p class="grid justify-center max-w-3xl justify-items-center text-left text-lg m-auto text-black mt-10 mb-12">
            Our platform has accessible pricing plans for smaller and larger churches,
            as well as a Free Forever plan that won't cost a thing. So whether your church 
            has 5 children or 500, you can access the resources you need to raise up faith in the next generation.
            </p>
        </slot>
    </div>
</template>




<script>
    export default {
        
    }
</script>

<style>

</style>