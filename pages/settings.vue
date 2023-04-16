<template>
  <main>
    <NuxtLink
      class="p-4 bg-green text-white rounded-sm w-[200px] text-center text-text-header hover:opacity-[0.8] transition-[1s]"
      to="/"
    >
      Главная
    </NuxtLink>
    <SettingsForm />
  </main>
</template>

<script lang="js">
import Vue from 'vue';
import SettingsForm from '~/components/pages/settings/forms/SettingsForm.vue';

export default Vue.extend({
  name: 'SettingsPage',

  components: { SettingsForm },

  middleware: 'guard',

  async asyncData({ store }) {
    await store.dispatch('settings.store/getUserData');
  },
});
</script>
