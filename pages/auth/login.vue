<template>
  <main class="w-full h-[100vh]">
    <form class="w-full h-full flex full:flex-row flex-col justify-center items-center gap-[50px]">
      <LoginForm />
    </form>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

import LoginForm from '~/components/pages/auth/forms/LoginForm.vue';

export default Vue.extend({
  name: 'AuthLoginPage',

  components: {
    LoginForm,
  },

  middleware: 'guard',
});
</script>
