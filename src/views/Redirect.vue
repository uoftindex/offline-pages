<template>
  <v-container class="mainContainer">
    <v-row>
      <v-col class="contentCol">
        <v-icon size="100" color="#003C85">mdi-book-open-page-variant</v-icon>
        <h1 class="heading themeColour">We've moved!</h1>
        <p class="narrowCol">
          Starting November 28/2022, this URL will no longer be accessible.
          We moved to <a href="https://uoftindex.ca">www.uoftindex.ca</a> on June 22/2022. Please bookmark the new site.
          Thank you!
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Redirect'
}
</script>

<style scoped>
  a {
    color: darkorange;
  }

</style>
