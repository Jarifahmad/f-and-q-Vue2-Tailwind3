<template>
    <div>
        <slot>
                <div class="bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 norder-black ">
        <h2 class="font-bold text-xl text-gray-400">Sign up to download the free PDF</h2>
                
            <form class="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0" action="#" method="#">
                <div class="flex flex-col md:flex-row md:-mx-2">
                    <label for="first_name" class="sr-only">First Name</label>
                    <input v-model="firstName" class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="First name" id="first_name">
                            
                    <label for="last_name" class="sr-only">Last Name</label>
                    <input v-model="lastName" class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Last name" id="last_name">
                </div>

                <input-field></input-field>

                <div class="flex flex-col md:flex-row  md:-mx-2">
                    <label for="email" class="sr-only">Email address</label>
                    <input v-model="email" class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="email" placeholder="john@email.com" id="email">
                            
                    <label for="title" class="sr-only">Title</label>
                    <input v-model="title" class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Your title" id="title">
                </div>
                <div class="flex flex-col md:flex-row md:-mx-2">
                    <button class="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2">Create account</button>
                </div>
            </form>
    </div>
        </slot>

    </div>
</template> 

<script>

export default {
  data (){
      return{
          firstName: null,
          lastName: null,
          email: null,
          title: null,
      }
  },

}

</script>