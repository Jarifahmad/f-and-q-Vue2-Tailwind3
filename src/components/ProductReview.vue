<template>
    <div class="flex flex-col items-center mt-8">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Name" >
                Name
            </label>
            <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name">
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Review
            </label>
            <input v-model="review" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="Review" placeholder="Review">
            </div>
            <div class="flex items-center justify-between">
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                </select>
            </p>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name: null,
                review: null,
                rating: null
            }
        }
    }
</script>

<style>

</style>