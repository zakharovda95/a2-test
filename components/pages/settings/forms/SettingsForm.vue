<template>
  <form action="" class="w-full min-h-[100vh] p-padding-base flex flex-col gap-5 max-w-[900px]">
    <PageSection section-title="Звонок через SIP">
      <template #headerAction>
        <UISwitcher
          class="relative top-[5px]"
          :enabled="!!Number($store.getters['settings.store/settings'].calltype)"
          @switch="$store.commit('settings.store/setUseSip', $event)"
        />
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

      <OtherSettingsForm class="my-4 border-b-[1px] border-lightgray" />
      <UIButton @click.native.prevent="sendReq" class="w-full" custom-type="green-large">
        Сохранить
      </UIButton>
      <UIError v-if="errors" :errors="errors" />
    </PageSection>
  </form>
</template>

<script>
import Vue from 'vue';
import PageSection from '~/components/shared/PageSection.vue';
import UIText from '~/components/UI/UIText.vue';
import UIError from '~/components/UI/UIError.vue';
import UISwitcher from '~/components/UI/UISwitcher.vue';
import AccountForm from '~/components/pages/settings/forms/AccountForm.vue';
import NotificationForm from '~/components/pages/settings/forms/NotificationsForm.vue';
import TransitionToCardForm from '~/components/pages/settings/forms/TransitionToCardForm.vue';
import OtherSettingsForm from '~/components/pages/settings/forms/OtherSettingsForm.vue';
import UIButton from '~/components/UI/UIButton.vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'SettingsForm',

  components: {
    UIButton,
    UIError,
    OtherSettingsForm,
    TransitionToCardForm,
    NotificationForm,
    AccountForm,
    UISwitcher,
    UIText,
    PageSection,
  },

  computed: {
    ...mapGetters({
      errors: 'errors.store/settingsErr',
    }),
  },

  methods: {
    ...mapActions({
      send: 'settings.store/putSettings',
    }),

    toast() {
      this.$toast.top('Сохранено');
    },

    async sendReq() {
      const res = await this.send();
      if (res) {
        this.toast();
      }
    },
  },
});
</script>
