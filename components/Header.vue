<template>
  <header class="py-4 border-b border-slate-800">
    <div class="px-24 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="font-bold text-white hover:text-green-400 transition"
        >InsightHub</NuxtLink
      >
      <nav class="hidden md:flex items-center gap-10 text-sm">
        <NuxtLink to="/#tentang" class="hover:text-green-500 transition"
          >Tentang</NuxtLink
        >
        <NuxtLink to="/#fitur" class="hover:text-green-500 transition"
          >Fitur</NuxtLink
        >
        <NuxtLink to="/faq" class="hover:text-green-500 transition"
          >FAQ</NuxtLink
        >
        <NuxtLink to="/dokumentasi" class="hover:text-green-500 transition"
          >Dokumentasi</NuxtLink
        >
        <NuxtLink
          to="#"
          class="px-6 py-2 rounded-lg bg-green-400 hover:bg-green-600 transition text-white font-semibold"
          >Isi Survei</NuxtLink
        >
      </nav>
      <button class="md:hidden">
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>
</template>
