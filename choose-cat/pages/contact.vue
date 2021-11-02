<template>
  <v-container class="mt-6">
    <div class="contact__image mb-5">
      <div class="hero-image-container">
      </div>
    </div>
    <v-form
      v-model="isValid"
      ref="form"
      data-qa="create-apartment-form"
      class="form"
      @submit.prevent="onSubmit"
    >
      <v-row
        dense
        class="form__inputs-row justify-space-between d-flex"
      >
        <v-col>
          <label
            for="form__input-firstName"
            class="form__input-label"
          >
            first name:
          </label>
        </v-col>
        <v-col class="col-9 form__input">
          <InputName
            id="form__input-firstName"
            :value="firstName"
          />
        </v-col>
      </v-row>
      <v-row
        dense
        class="form__inputs-row justify-space-between d-flex"
      >
        <v-col>
          <label
            for="form__input-lastName"
            class="form__input-label"
          >
            last name:
          </label>
        </v-col>
        <v-col class="col-9 form__input">
          <InputName
            id="form__input-lastName"
            :value="lastName"
          />
        </v-col>
      </v-row>
      <v-row
        dense
        class="form__inputs-row justify-space-between d-flex"
      >
        <v-col>
          <label
            for="form__input-email"
            class="form__input-label"
          >
            email:
          </label>
        </v-col>
        <v-col class="col-9 form__input">
          <Email
            id="form__input-email"
            :value="email"
          />
        </v-col>
      </v-row>
      <v-row
        dense
        class="form__inputs-row justify-space-between d-flex"
      >
        <v-col>
          <label
            for="form__input-message"
            class="form__input-label"
          >
            message:
          </label>
        </v-col>
        <v-col class="col-9 form__input">
          <v-textarea
            v-model="message"
            id="form__input-message"
            placeholder="Enter Your Message Here..."
            required
            data-qa="create-apartment-description"
            counter="300"
            autoGrow
            :rules="messageRules"
            outlined
          />
        </v-col>
      </v-row>
      <div class="form__buttons d-flex justify-space-between">
        <v-btn
          outlined
          class="form__button"
          :disabled="isDisabled"
          @click="onSubmit"
        >
          send
        </v-btn>
        <v-btn
          outlined
          class="form__button"
          @click="reset"
        >
          reset
        </v-btn>
      </div>
    </v-form>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card class="d-flex flex-column">
        <v-card-title class="success justify-center mb-2">
          Your message is send.
        </v-card-title>
        <v-card-text class="text-center mt-5">
          Thank you
        </v-card-text>
        <v-btn
          color="primary"
          class=" justify-center "
          text
          @click="dialog = false"
        >
          ok
        </v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import { required, minLength, maxLength } from "vuelidate/lib/validators";
  import InputName from "../components/InputName/InputName.vue";
  import Email from "../components/Email/Email.vue";

  export default {
    name: 'ContactPage',
    components: {Email, InputName},
    data(){
      return {
        dialog: false,
        isValid: false,
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        messageRules: [
          (v) => required(v) || 'The field is required',
          (v) => minLength(4)(v) || 'The message must be more then 3 character',
          (v) => maxLength(299)(v) || 'The message must be less then 300 character',
        ],
      }
    },
    computed: {
      isDisabled() {
        return !this.isValid;
      },
    },
    methods: {
      reset() {
        this.$refs.form.reset();
      },
      onSubmit() {
        this.showDialog();
        this.reset();
      },
      showDialog() {
        this.dialog = true;
      },
    },
  }
</script>

<style lang="scss">
.contact__image {
  background: url("@/static/contact.jpg") center center no-repeat;
  height: 200px;
  background-size: cover;
  background-position-y: 70%;
}

.form {
  max-width: 450px;
  width: 100%;
  margin: auto;

  &__inputs {
    &-container {
      margin-top: 50px;
      width: 100%;

      @media screen and (max-width: 600px) {
        justify-content: center;
      }
    }
  }

  &__buttons {
    margin: auto;
    max-width: 300px;
  }

  &__input-label {
    font-family: $font-body;
    text-transform: capitalize;
  }
}
</style>
