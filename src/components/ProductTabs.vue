<template>
    <div class="flex flex-col items-center mt-6 ">
        <ul>
            <span :class="{ activeTab: selectedTab === tab }" class="tab" v-for="(tab, index) in tabs" :key="index" @click="selectedTab = tab">
            {{ tab }}</span>
        </ul> 
    </div>
</template>

<script>

    export default {
        data(){
            return{
                tabs: ['Reviews',' Make a Review'],
                selectedTab: 'Reviews'
            }
        },
    }
</script>

<style>

</style>