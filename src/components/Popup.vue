<template>
    <v-dialog max-width="700px" v-model="dialog">
        <v-btn slot="activator" color="green" >Add new Project</v-btn>
        <v-card>
            <v-card-title>This is a new project</v-card-title>
            <v-form class="mt-2 mx-3" ref="form">
                <v-text-field label="title" v-model="title" prepend-icon="folder" :rules="inpps"></v-text-field>
                <v-textarea label="Info" v-model="info" prepend-icon ="create" :rules="inpps"></v-textarea>
                <v-menu offset-y>
                    <v-text-field label="date" slot="activator" :value="formatted" prepend-icon="event"></v-text-field>
                    <v-date-picker v-model="due"></v-date-picker>
                </v-menu>
                <v-btn flat class="green mx-2 mt-3" @click="submitted" :loading="loading">Add project</v-btn>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb.js'

export default {
    data(){
        return{
            loading:false,
            title:'',
            info:'',
            due:null,
            inpps:[
                a => a.length >= 3 || 'Minimum length is 3 characters'
            ],
            dialog:false
        }
    },
    methods:{
        submitted(){
            if(this.$refs.form.validate()){
                this.loading=true;
                const project = {
                    title : this.title,
                    content : this.info,
                    due : format(this.due,'Do MMM YYYY'),
                    status : 'ongoing',
                    person : 'djo'
                }

                db.collection('projects').add(project).then(()=>{
                    this.loading = false;
                    this.dialog=false;
                    this.$emit('projectAdded')
                })
            }
        }
    },
    computed: {
        formatted(){
            return this.due ? format(this.due,"Do MMM YYYY"):""
        }
    }   
}
</script>
