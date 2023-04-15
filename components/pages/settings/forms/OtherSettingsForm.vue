<template>
  <FormGroup>
    <UISelect
      v-model="body.timezone"
      class="my-3"
      label="Часовой пояс"
      :options="timezoneOptions"
    />

    <UICheckbox
      id="setting-1"
      class="my-3"
      :model-value="body.newAnnouncements"
      label="Автоматически переходить к новым объявлениям"
      @update:model-value="body.newAnnouncements = $event"
    >
      <template #additionalContent>
        <UIHelp text="Лента будет автоматически обновляться 1 раз в 3 секунды" />
      </template>
    </UICheckbox>

    <UICheckbox
      id="setting-2"
      class="my-3"
      :model-value="body.enableColors"
      label="Включить цвета в ленте"
      @update:model-value="body.enableColors = $event"
    >
      <template #additionalContent>
        <UIHelp text="Включение зеленого/желтого цвета" />
      </template>
    </UICheckbox>
  </FormGroup>
</template>

<script lang="js">
import Vue from 'vue';
import UISelect from '~/components/UI/UISelect.vue';
import FormGroup from '~/components/shared/FormGroup.vue';

import { TIMEZONE_OPTIONS } from '~/helpers/constants/pages/select-options.constants';
import UICheckbox from '~/components/UI/UICheckbox.vue';
import UIHelp from '~/components/UI/UIHelp.vue';

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
    timezoneOptions() {
      return TIMEZONE_OPTIONS;
    },
  },
});
</script>
