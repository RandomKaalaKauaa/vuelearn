<template>
<div class='dashboard'>
  <h1 class="subheading grey--text text--darken-1">Dashboard</h1>
 
  <v-btn depressed small dark color="blue" >
   <v-icon left small>email</v-icon> <span>Email me</span>    
  </v-btn>

  <v-container class='my-5'>

    
    <v-layout row>
      <v-tooltip top>
        <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
        <v-icon small left>folder</v-icon>
        <span>By Project</span>
      </v-btn>
      <span>sort projects by project name</span>
      </v-tooltip>
      
      <v-tooltip top>
        <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
        <v-icon small left>person</v-icon>
        <span>By person</span>
      </v-btn>
      <span>sort projects by person</span>
      </v-tooltip>
      

    </v-layout>
    <v-card flat v-for="project in projects" :key="project.name">
      <v-layout wrap row :class="`pa-3 project ${project.status}`">
        <v-flex xs12 md6>
          <div class="caption grey--text">Project Title</div>
          <div>{{project.title}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Person</div>
          <div>{{project.person}}</div>
        </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="right">
            <v-chip :class="`white--text ${project.status}`">{{project.status}}</v-chip>  
          </div>
        </v-flex>

      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </v-container>
</div>
</template>

<script>
import db from '@/fb'
  
  export default {
    data(){
      return{
        projects : []
      }
     },
    
    methods:{
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    },

    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id:change.doc.id
          })
        }
        })
      })
    },

  }
</script>

<style>
 .project.complete{
   border-left: 4px solid #3CD1C2;
 }

 .project.ongoing{
   border-left: 4px solid orange;
 }

 .project.overdue{
   border-left: 4px solid tomato;
 }

 .v-chip.complete{
  background:#3CD1C2;  
 }

 .v-chip.ongoing{
  background:orange;  
 }

 .v-chip.overdue{
  background:tomato;  
 }
</style>
