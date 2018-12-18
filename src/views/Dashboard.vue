<template>
<div class='dashboard'>
  <h1 class="subheading grey--text text--darken-1">Dashboard</h1>
 
  <v-btn depressed small dark color="blue" >
   <v-icon left small>email</v-icon> <span>Email me</span>    
  </v-btn>

  <v-container class='my-5'>
    <v-card flat class='pa-4'>
      <v-layout wrap row>
        <v-flex xs12 md6>
          <div class="caption grey--text">Project Title</div>
          <div>todo list new vuetify app</div>
        </v-flex>

        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Person</div>
          <div>Djo</div>
        </v-flex>

        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Due by</div>
          <div>30 november 2019</div>
        </v-flex>

        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Status</div>
          <div>Ongoing</div>
        </v-flex>

      </v-layout>
    </v-card>
  </v-container>
</div>
</template>

<script>
  
  export default {
    
  }
</script>
