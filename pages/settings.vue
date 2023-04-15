<template>
  <main>
    <SettingsForm />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import SettingsForm from '~/components/pages/settings/forms/SettingsForm.vue';

export default Vue.extend({
  name: 'SettingsPage',
  components: { SettingsForm },
});
</script>
