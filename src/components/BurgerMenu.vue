<template>
     <!-- Menu Section -->
  <section id="menu"
    class="w-full hidden lg:hidden top-0 absolute z-30 bg-gradient-to-b from-black/10 to-black/40 h-full transition animate-fadein">
    <div class="container mx-auto">
      <div class="py-10 flex flex-row-reverse">
        <button class="" onclick="showMenu()">
          <img src="" alt="icon-close">
        </button>
      </div>
      <ul id="contentMenu" class="flex flex-col space-y-5 text-center font-bold bg-white rounded py-12">
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
    </div>
  </section>
</template>