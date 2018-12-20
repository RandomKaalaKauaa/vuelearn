<template>
    <nav>
    <v-toolbar flat app>
        <v-toolbar-side-icon class='grey' @click="boi=!boi"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase grey--text text--darken-2">
            <span class="font-weight-light">Todo</span>
            <span>Djo</span>
        </v-toolbar-title>

        <v-spacer></v-spacer> <!-- this will take up all the free space until the next element that is the buttop -->
        <!-- dropdown menu -->
        <v-menu offset-y>
            <v-btn flat color="grey" slot="activator">
                <span class="grey--text">Menu</span>
                <v-icon left>expand_more</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-title>
                        {{link.text}}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        
        <v-btn flat small color="grey">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>
    
    <v-navigation-drawer v-model="boi" class="info" app>
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="100" >  
                    <img src="/avatar-4.png">
                </v-avatar>
                <p class="subheading mt-1 white--text text-xs-center">Djo</p>
            </v-flex>
            <v-flex class="mt-4 mb-3">
                <popup />
            </v-flex>
        </v-layout>
        <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-tile-action>
                    <v-icon class='white--text'>{{link.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>
import popup from './Popup'
export default {
    components:{popup},
    data(){
        return{
            boi:false,
            links:[
                {icon:'dashboard',text:'Dashboard',route:'/'},
                {icon:'folder',text:'My projects',route:'/projects'},
                {icon:'person',text:'Team',route:'/team'}
            ]
        }
    }
}
</script>
