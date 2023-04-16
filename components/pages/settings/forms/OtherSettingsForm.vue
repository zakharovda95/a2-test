<template>
  <FormGroup>
    <UISelect
      :model-value="settings.timezone"
      @update:model-value="setTimezone($event)"
      class="my-3"
      label="Часовой пояс"
      :options="timezoneOptions"
    />

    <UICheckbox
      id="setting-1"
      class="my-3"
      :model-value="settings.newAnnouncements"
      label="Автоматически переходить к новым объявлениям"
      @update:model-value="setNewAnnouncements($event)"
    >
      <template #additionalContent>
        <UIHelp text="Лента будет автоматически обновляться 1 раз в 3 секунды" />
      </template>
    </UICheckbox>

    <UICheckbox
      id="setting-2"
      class="my-3"
      :model-value="settings.enableColors"
      label="Включить цвета в ленте"
      @update:model-value="setEnableColors($event)"
    >
      <template #additionalContent>
        <UIHelp text="Включение зеленого/желтого цвета" />
      </template>
    </UICheckbox>
  </FormGroup>
</template>

<script lang="ts">
import Vue from 'vue';
import UISelect from '~/components/UI/UISelect.vue';
import FormGroup from '~/components/shared/FormGroup.vue';

import { TIMEZONE_OPTIONS } from '~/helpers/constants/pages/select-options.constants';
import UICheckbox from '~/components/UI/UICheckbox.vue';
import UIHelp from '~/components/UI/UIHelp.vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'OtherSettingsForm',

  components: {
    UIHelp,
    UICheckbox,
    FormGroup,
    UISelect,
  },

  data: () => ({
    body: {
      timezone: '',
      newAnnouncements: false,
      enableColors: false,
    },
  }),

  computed: {
    ...mapGetters({
      settings: 'settings.store/settings',
    }),

    timezoneOptions() {
      return TIMEZONE_OPTIONS;
    },
  },

  methods: {
    ...mapMutations({
      setTimezone: 'settings.store/setTimezone',
      setNewAnnouncements: 'settings.store/setAnnouncements',
      setEnableColors: 'settings.store/setEnableColors',
    }),
  },
});
</script>
