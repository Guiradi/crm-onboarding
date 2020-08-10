<template>
  <v-container>
    <v-form v-model="validForm" ref="loginForm" lazy-validation>
      <v-layout row wrap justify-center>
        <v-flex xs6>
          <v-text-field
            name="email"
            label="E-mail"
            v-model="credentials.email"
            :rules="requiredRules"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs6>
          <v-text-field
            name="password"
            label="Senha"
            type="password"
            v-model="credentials.password"
            :rules="requiredRules"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex text-xs-center>
          <v-btn @click="checkFields" color="success">Login</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import { makeLogin } from "../services/auth.service";
export default {
  data: () => ({
    makeLogin,

    credentials: {
      email: "",
      password: ""
    },

    requiredRules: [v => !!v || "Campo obrigatório!"],

    validForm: true
  }),

  methods: {
    async checkFields() {
      try {
        const result = this.$refs.loginForm.validate();

        if (!result) {
          throw new Error("Preencha todos os campos obrigatórios!");
        }

        await this.makeLogin(this.credentials);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
};
</script>

<style></style>
