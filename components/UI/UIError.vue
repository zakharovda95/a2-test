<template>
  <div class="max-w-[300px]">
    <UIText class="text-[red] text-[12px]" v-for="error in errors" :key="error.id">
      {{ error.title }}
    </UIText>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import UIText from '~/components/UI/UIText.vue';
import { IErrorsType } from '~/helpers/types/store/error-store.type';

export default Vue.extend({
  name: 'UIError',

  components: {
    UIText,
  },

  props: {
    errors: {
      type: Array as PropType<IErrorsType[]>,
      required: true,
    },
  },
});
</script>
