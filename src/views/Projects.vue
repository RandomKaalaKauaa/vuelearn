<template>
<div class='projects'>
  <h1 class="subheading grey--text text--darken-1">Projects</h1>
  
  <v-container class='my-5'>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
        <div slot="header">{{project.title}}</div>
        <v-card>
          <v-card-text class="px-3 grey--text">
            <div class="font-weight-bold">{{project.due}}</div>
            <div>{{project.content}}</div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>

</div>
</template>

<script>
  
  export default {
    data(){
      return{
        projects : [{ title: 'Design a new website', person: 'The net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Make todo vuetify app', person: 'Djo', due: '30th Nov 2018', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Chun li', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gokuen', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
     }
    },
    computed:{
      myProjects(){
        return this.projects.filter(project => {
          return project.person ==='Djo'
        } )
        
      }
    }
  }
</script>
