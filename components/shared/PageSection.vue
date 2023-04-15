<template>
  <section class="w-full h-auto flex full:flex-row flex-col">
    <div class="w-[300px] flex gap-[15px]">
      <UIText title>{{ sectionTitle }}</UIText>

      <div v-if="$slots.headerAction">
        <slot name="headerAction" />
      </div>
    </div>

    <div class="max-w-[500px]">
      <div v-if="$slots.bodyDescription" style="color: gray !important">
        <slot name="bodyDescription" />
      </div>

      <div v-if="$slots.default">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Vue from 'vue';
import UIText from '~/components/UI/UIText.vue';

export default Vue.extend({
  name: 'PageSection',
  components: { UIText },

  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
  },
});
</script>
