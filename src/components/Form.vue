<template>
    <div class="container mt-3">
        <b-form @submit.prevent="submit">
            <b-form-group label="Username :">
                <b-form-input type="text" placeholder="Enter a Username"
                        :state="!$v.form.username.$anyError && !$v.form.username.$invalid ? true:false"    
                            v-model="$v.form.username.$model"></b-form-input>
                <b-form-invalid-feedback>Provide a valid username</b-form-invalid-feedback>
                <b-form-valid-feedback>Looks Good</b-form-valid-feedback>
            </b-form-group>
            <b-form-group label="Email :">
                <b-form-input type="email" placeholder="Enter your email"
                              v-model="$v.form.mail.$model"></b-form-input>
                <b-form-invalid-feedback>Provide a valid email address</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Password :">
                <b-form-input type="password" placeholder="Enter your Password"
                              v-model="$v.form.password.$model"></b-form-input>
                <b-form-invalid-feedback>Provide a Strong Password</b-form-invalid-feedback>
            </b-form-group>
            <b-button variant="primary" type="submit">Sign-Up</b-button>
        </b-form>
    </div>
</template>

<script>
import {required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
    name: 'Form',
    data() {
        return {
            form : {
                username:'',
                mail : '',
                password: ''
            }
        }
    },
    validations: {
        form: {
            username:{
            required,
            minLength:minLength(3),
            maxLength:maxLength(10)
            },
            mail: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8),
                maxLength:maxLength(15)
            }
        }
    },
    methods: {
        
    }
}
</script>