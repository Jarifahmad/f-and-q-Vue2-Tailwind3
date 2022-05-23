<template>
    <div class="flex flex-col justify-center items-center">
        <slot name="content">
            <img src="https://i.stack.imgur.com/y9DpT.jpg" alt="place holder image">
        </slot>
        <p>
            <slot name="caption"> Caption </slot>
        </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>