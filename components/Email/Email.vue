<template>
  <v-text-field
    v-model="email"
    class="form__input"
    placeholder="Enter Your Email Here..."
    required
    dense
    autocomplete="new-password"
    :rules="emailRules"
    outlined
  />
</template>

<script>
  import { required, email } from "vuelidate/lib/validators";

  export default {
    name: "Email",
    props: {
      value: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        email: this.value,
        emailRules: [
          (v) => required(v) || 'This field is required',
          (v) => email(v) || 'Email is invalid',
        ],
      }
    },
  }
</script>
