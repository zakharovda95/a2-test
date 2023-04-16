<template>
  <main class="w-full h-[100vh] flex justify-center items-center">
    <div v-if="isAuth" class="flex full:flex-row flex-col justify-center items-center gap-[50px]">
      <NuxtLink
        class="p-4 bg-green text-white rounded-sm w-[200px] text-center text-text-header hover:opacity-[0.8] transition-[1s]"
        to="/"
        @click.native="logout"
      >
        Выход
      </NuxtLink>
      <NuxtLink
        class="p-4 bg-green text-white rounded-sm w-[200px] text-center text-text-header hover:opacity-[0.8] transition-[1s]"
        to="/settings"
      >
        Настройки
      </NuxtLink>
    </div>

    <div v-if="!isAuth" class="flex full:flex-row flex-col justify-center items-center gap-[50px]">
      <NuxtLink
        class="p-4 bg-green text-white rounded-sm w-[200px] text-center text-text-header hover:opacity-[0.8] transition-[1s]"
        to="/auth/login"
      >
        Вход
      </NuxtLink>
      <NuxtLink
        class="p-4 bg-green text-white rounded-sm w-[200px] text-center text-text-header hover:opacity-[0.8] transition-[1s]"
        to="/auth/register"
      >
        Регистрация
      </NuxtLink>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'IndexPage',

  middleware: 'guard',

  computed: {
    ...mapGetters({
      isAuth: 'login.store/isAuth',
    }),
  },

  methods: {
    ...mapActions({
      logout: 'login.store/logout',
    }),
  },
});
</script>
