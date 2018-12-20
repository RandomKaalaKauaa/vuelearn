<template>
<div class='team'>
  <h1 class="subheading grey--text text--darken-1">Team</h1>
  <v-container class='my-5'>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="members in team" :Key="members.name">
        <v-card flat class="ma-3 text-xs-center">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="grey lighten-2">
              <img :src="members.avatar">
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{members.name}}</div>
            <div class="grey--text">{{members.role}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="grey">
              <v-icon small left>message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
  
  export default {
    data(){
      return {
        team:[
            {name:"The Net Ninja",role:"Web developer",avatar:'/avatar-1.png'},
            {name:"Chun li",role:"Graphic designer",avatar:'/avatar-2.png'},
            {name:"Ryu",role:"sound engineer",avatar:'/avatar-3.png'},
            {name:"Djo",role:"Full stack",avatar:'/avatar-4.png'},
            {name:"Gouken",role:"nothing",avatar:'/avatar-5.png'},
        ]    
      }
    }
  }
</script>