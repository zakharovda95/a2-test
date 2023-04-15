<template>
  <main class="w-full h-[100vh] flex full:flex-row flex-col justify-center items-center gap-[50px]">
    <NuxtLink
      class="p-4 bg-green text-white rounded-sm w-[200px] text-center text-text-header hover:opacity-[0.8] transition-[1s]"
      to="/auth/login"
    >
      Вход
    </NuxtLink>
    <NuxtLink
      class="p-4 bg-green text-white rounded-sm w-[200px] text-center text-text-header hover:opacity-[0.8] transition-[1s]"
      to="/auth/registration"
    >
      Регистрация
    </NuxtLink>
  </main>
</template>
