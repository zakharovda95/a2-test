<template>
  <FormGroup title="Уведомления">
    <UIRadio
      id="off"
      label="Выкл"
      value="-1"
      :model-value="settings.notifytype"
      name="notifications"
      @update:model-value="setNotificationType($event)"
    />

    <UIRadio
      id="push"
      disabled
      label="Push"
      value="0"
      :model-value="settings.notifytype"
      name="notifications"
      @update:model-value="setNotificationType($event)"
    >
      <template #additionalContent>
        <UIHelp text="Можно установить только в приложении" />
      </template>
    </UIRadio>

    <UIRadio
      id="email"
      label="Email"
      value="1"
      :model-value="settings.notifytype"
      name="notifications"
      @update:model-value="setNotificationType($event)"
    >
      <template #additionalContent>
        <UIEditInput
          id="notifications-email"
          :model-value="settings.email || ''"
          @update:model-value="setEmail($event)"
        />
      </template>
    </UIRadio>

    <UIRadio
      id="telegram"
      label="Telegram ID"
      value="2"
      :model-value="settings.notifytype"
      name="notifications"
      label-link="https://avclick.me/v/AVinfoBot"
      @update:model-value="setNotificationType($event)"
    >
      <template #additionalContent>
        <UIEditInput
          id="notifications-telegram"
          :model-value="settings.telegramChat || ''"
          @update:model-value="setTelegram($event)"
        />
      </template>
    </UIRadio>
  </FormGroup>
</template>

<script lang="js">
import Vue from 'vue';

import UIRadio from '~/components/UI/UIRadio.vue';
import UIEditInput from '~/components/UI/UIEditInput.vue';
import UIHelp from '~/components/UI/UIHelp.vue';
import FormGroup from '~/components/shared/FormGroup.vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'NotificationForm',

  components: {
    UIHelp,
    UIEditInput,
    UIRadio,
    FormGroup,
  },

  computed: {
    ...mapGetters({
      settings: 'settings.store/settings',
    }),
  },

  methods: {
    ...mapMutations({
      setEmail: 'settings.store/setEmail',
      setNotificationType: 'settings.store/setNotificationType',
      setTelegram: 'settings.store/setTelegram',
    }),
  },
});
</script>
