<template>
  <v-text-field
    v-model="name"
    class="form__input"
    placeholder="Enter Your Text Here..."
    required
    autocomplete="off"
    dense
    :rules="nameRules"
    outlined
  />
</template>

<script>
  import {minLength, maxLength, required} from "vuelidate/lib/validators";

  export default {
    name: "InputName",
    props: {
      value: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        name: this.value,
        nameRules: [
          (v) => required(v) || 'This field is required',
          (v) => minLength(3)(v) || 'Must be more then 2 character',
          (v) => maxLength(49)(v) || 'Must be less then 50 character',
        ],
      }
    },
  }
</script>
