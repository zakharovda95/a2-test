<template>
  <main class="w-full h-[100vh]">
    <form
      action=""
      class="w-full h-full flex full:flex-row flex-col justify-center items-center gap-[50px]"
    >
      <RegisterForm />
    </form>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

import RegisterForm from '~/components/pages/auth/forms/RegisterForm.vue';

export default Vue.extend({
  name: 'RegisterPage',

  components: {
    RegisterForm,
  },
});
</script>
