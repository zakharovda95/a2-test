<template>
  <div class="w-full min-h-[100vh] p-padding-base flex flex-col gap-5">
    <PageSection section-title="Звонок через SIP">
      <template #headerAction>
        <UISwitcher class="relative top-[5px]" @switch="enabled = !enabled" />
      </template>

      <template #bodyDescription>
        <UIText class="text-text-description">
          Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет
          выглядеть так, будто звонки совершаются с разных номеров.
        </UIText>
      </template>
    </PageSection>

    <PageSection section-title="Учётная запись">
      <AccountForm />
    </PageSection>

    <PageSection section-title="Оповещения о новых подборках">
      <template #bodyDescription>
        Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под
        критерии вашей подборки.
      </template>

      <NotificationForm class="my-4" />
    </PageSection>

    <PageSection section-title="Переход в карточку">
      <template #bodyDescription>
        Выберите, каким образом будет открываться детальное представление выбранного вами
        транспорта.
      </template>

      <TransitionToCardForm class="my-4" />
    </PageSection>

    <PageSection section-title="Прочие настройки">
      <template #bodyDescription>
        Выберите, каким образом будет открываться детальное представление выбранного вами
        транспорта.
      </template>

      <OtherSettingsForm class="my-4" />
    </PageSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageSection from '~/components/shared/PageSection.vue';
import UIText from '~/components/UI/UIText.vue';
import UISwitcher from '~/components/UI/UISwitcher.vue';
import AccountForm from '~/components/pages/index/forms/AccountForm.vue';
import NotificationForm from '~/components/pages/index/forms/NotificationsForm.vue';
import TransitionToCardForm from '~/components/pages/index/forms/TransitionToCardForm.vue';
import OtherSettingsForm from '~/components/pages/index/forms/OtherSettingsForm.vue';

export default Vue.extend({
  name: 'IndexPageView',

  components: {
    OtherSettingsForm,
    TransitionToCardForm,
    NotificationForm,
    AccountForm,
    UISwitcher,
    UIText,
    PageSection,
  },

  data: () => ({
    enabled: false,
  }),
});
</script>
