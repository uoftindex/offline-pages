<template>
  <v-container class="mainContainer">
    <v-row>
      <v-col class="contentCol">
        <v-icon size="100" color="#003C85">mdi-book-open-page-variant</v-icon>
        <h1 class="heading themeColour">We have moved!</h1>
        <p class="narrowCol">
          As of June 22/2022 we have moved to <a href="https://uoftindex.ca">uoftindex.ca</a>, please bookmark the new site. Thank you!
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
