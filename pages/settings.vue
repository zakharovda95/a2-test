<template>
  <main>
    <SettingsPageView />
  </main>
</template>

<script lang="js">
import Vue from 'vue';
import SettingsPageView from '~/components/pages/settings/SettingsPageView.vue';

export default Vue.extend({
  components: {
    SettingsPageView,
  },
});
</script>
