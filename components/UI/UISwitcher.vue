<template>
  <div>
    <input v-bind="$attrs" id="switcher" class="hidden" />
    <label class="cursor-pointer" for="switcher" @click.stop="goSwitch">
      <div
        class="w-[35px] h-[20px] border-2 opacity-[0.8] rounded-xl"
        :class="enabled ? 'border-green' : 'border-lightgray'"
      >
        <div
          class="dot w-[18px] h-[18px] rounded-2xl relative left-[6px] top-[-0.6px]"
          :class="switchPosition"
        />
      </div>
    </label>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'UISwitcher',

  inheritAttrs: false,

  emits: ['switch'],

  props: {
    enabled: false,
  },

  computed: {
    switchPosition() {
      return {
        'top-[-1.5px] translate-x-[8.5px] transition-[1s] bg-green': this.enabled,
        'top-[-1.5px]  translate-x-[-8.5px] transition-[1s] bg-lightgray': !this.enabled,
      };
    },
  },

  methods: {
    goSwitch() {
      this.enabled = !this.enabled;
      this.$emit('switch', this.enabled);
    },
  },
});
</script>
