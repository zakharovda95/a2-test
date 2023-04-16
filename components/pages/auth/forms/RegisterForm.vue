<template>
  <FormGroup title="Регистрация">
    <UIInput
      id="phone"
      v-mask="'###########'"
      :model-value="phone"
      @update:model-value="setBody($event)"
    />
    <UIButton custom-type="green-large" @click.prevent.native="register">Отправить</UIButton>
    <NuxtLink class="underline text-green text-[14px]" to="/auth/login"> Войти </NuxtLink>
    <UIError v-if="errors" :errors="errors" />
  </FormGroup>
</template>

<script lang="js">
import Vue from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

import FormGroup from '~/components/shared/FormGroup.vue';
import UIInput from '~/components/UI/UIInput.vue';
import UIButton from '~/components/UI/UIButton.vue';
import UIText from '~/components/UI/UIText.vue';
import UIError from '~/components/UI/UIError.vue';
import { mask } from 'vue-the-mask';

export default Vue.extend({
  name: 'RegisterForm',

  directives: { mask },

  components: {
    UIButton,
    UIInput,
    UIText,
    UIError,
    FormGroup,
  },

  computed: {
    ...mapGetters({
      phone: 'register.store/phone',
      errors: 'errors.store/registerErr',
    }),
  },

  methods: {
    ...mapMutations({
      setBody: 'register.store/setPhone',
    }),

    ...mapActions({
      register: 'register.store/register',
    }),
  },
});
</script>
