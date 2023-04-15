<template>
  <main class="w-full h-[100vh]">
    <form class="w-full h-full flex full:flex-row flex-col justify-center items-center gap-[50px]">
      <RegistrationForm />
    </form>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

import RegistrationForm from '~/components/pages/auth/forms/RegistrationForm.vue';

export default Vue.extend({
  components: {
    RegistrationForm,
  },
});
</script>
