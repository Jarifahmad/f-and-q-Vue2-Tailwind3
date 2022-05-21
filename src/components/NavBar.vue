<template>
    <!-- Navbar Section -->
  <nav class="container mx-auto">
    <div class="flex justify-between items-center py-10">
      <a href="#"><img src="" alt="logo"></a>
      <ul class="hidden lg:flex space-x-8 font-medium text-sm">
        <li class="hover:text-secondary/60">
          <a href="/">Pricing</a>
        </li>
        <li class="hover:text-secondary/60">
          <a href="">Product</a>
        </li>
        <li class="hover:text-secondary/60">
          <a href="">About Us</a>
        </li>
        <li class="hover:text-secondary/60">
          <a href="">Careers</a>
        </li>
        <li class="hover:text-secondary/60">
          <a href="">Community</a>
        </li>
      </ul>
      <button class="hidden lg:block bg-primary text-black font-semibold rounded-full px-6 py-3 hover:bg-primary/70 shadow-lg
        shadow-primary/50">
        Click me
      </button>
      <button id="menuBtn" onclick="showMenu()" class="block lg:hidden">
        <img src="" alt="icon-menu">
      </button>
    </div>
  </nav>
</template>