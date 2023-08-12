<template>
  <div class="hello">Hello Nuxt {{ version }}!</div>

  <div class="d-flex align-center flex-column">
    <input type="tel" id="phone" />

    <div class="text-subtitle-2">With props</div>

    <v-card
      width="400"
      title="This is a title"
      subtitle="This is a subtitle"
      text="This is content"
    >
      <v-text-field label="First name" hide-details="auto"></v-text-field>

      <template>
        <v-responsive class="mx-auto" max-width="344">
          <v-text-field label="First name" hide-details="auto"></v-text-field>
        </v-responsive>
      </template>
    </v-card>

    <div class="mt-4 text-subtitle-2">With slots</div>

    <v-card width="400">
      <template v-slot:title> This is a title </template>

      <template v-slot:subtitle> This is a subtitle </template>

      <template v-slot:text> This is content </template>
    </v-card>

    <div class="mt-4 text-subtitle-2">With markup</div>

    <v-card width="400">
      <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item>

      <v-card-text> This is content </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const version = 2 + 1;

onMounted(() => {
  const input = document.querySelector("#phone") as HTMLInputElement;
  (window as any).intlTelInput(input);
});
</script>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
