<template>
      <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="black lighten-2" dark v-on="on">
        Login
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline green darken-2 white--text" primary-title>
        Login
      </v-card-title>
      <v-card-text>
        <v-form>

          <v-text-field 
            v-model="user.username" 
            label="Username"
            name="username" 
            data-vv-name="username" 
            v-validate="'required'"
            :error-messages="errors.first('username')"
            required >
          </v-text-field>
          <span>{{ errors.first('username') }}</span>
          
          <v-text-field 
            v-model="user.password" 
            :type="'password'" 
            label="Password"
            name="password" 
            data-vv-name="password"
            v-validate="'require|min:8'"  
            required >
          </v-text-field>
          <span>{{ errors.first('password') }}</span>

          <v-card-actions>
            <v-btn class="mr-4 green darken-2 white--text" @click="login">Login</v-btn>
            <v-btn class="grey darken-2 white--text" @click="dialog = false">Close</v-btn>
          </v-card-actions>

        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script src="./login.js"></script>
