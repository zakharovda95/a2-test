<template>
  <FormGroup>
    <UISelect />
  </FormGroup>
</template>

<script lang="ts">
import Vue from 'vue';
import UISelect from '~/components/UI/UISelect.vue';
import FormGroup from '~/components/shared/FormGroup.vue';

export default Vue.extend({
  name: 'OtherSettingsForm',

  components: {
    FormGroup,
    UISelect,
  },
});
</script>
