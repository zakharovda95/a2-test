<template>
  <div>
    <UIText class="text-[20px] font-bold">Уведомления</UIText>

    <form>
      <UIRadio
        id="off"
        label="Выкл"
        model-value="off"
        name="notifications"
        @update:model-value="notificationType = $event"
      />

      <UIRadio
        id="push"
        disabled
        label="Push"
        model-value="push"
        name="notifications"
        @update:model-value="notificationType = $event"
      >
        <template #additionalContent>
          <UIHelp text="Можно установить только в приложении" />
        </template>
      </UIRadio>

      <UIRadio
        id="email"
        label="Email"
        model-value="email"
        name="notifications"
        @update:model-value="notificationType = $event"
      >
        <template #additionalContent>
          <UIEditInput :model-value="editData.email" @update:model-value="editData.email" />
        </template>
      </UIRadio>

      <UIRadio
        id="telegram"
        label="Telegram ID"
        model-value="telegram"
        name="notifications"
        label-link
        @update:model-value="notificationType = $event"
      >
        <template #additionalContent>
          <UIEditInput :model-value="editData.telegram" @update:model-value="editData.telegram" />
        </template>
      </UIRadio>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UIText from '~/components/UI/UIText.vue';
import UIRadio from '~/components/UI/UIRadio.vue';
import UIEditInput from '~/components/UI/UIEditInput.vue';
import UIHelp from '~/components/UI/UIHelp.vue';

export default Vue.extend({
  name: 'NotificationForm',

  components: {
    UIHelp,
    UIEditInput,
    UIRadio,
    UIText,
  },

  data: () => ({
    notificationType: '',
    editData: {
      email: '',
      telegram: '',
    },
  }),
});
</script>
