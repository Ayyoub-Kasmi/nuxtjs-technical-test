<template>
    <div class="email-us-container">
        <div class="title">
            Nous sommes ouverts à
            <br>
            toutes vos questions et
            <br>
            commentaires !
        </div>
        <div class="form-container">
            <v-form ref="emailForm" @submit="sendEmail" action="/api/email/send" method="post">
                <v-text-field
                label="Nom"
                v-model="nom"
                :rules="[required]"
                placeholder="Entre votre nom"
                type="text"
                variant="solo"
                bg-color="yellow"
                >
                </v-text-field>
                
                <v-text-field
                label="Prenom"
                v-model="prenom"
                :rules="[required]"
                placeholder="Entre votre nom"
                type="text"
                variant="solo"
                >
                </v-text-field>
                
                <v-text-field
                label="Email"
                v-model="email"
                :rules="[required]"
                placeholder="Entre votre nom"
                type="text"
                variant="solo"
                >
                </v-text-field>
                
                <v-text-field
                label="Telephone"
                v-model="phone"
                :rules="[required, checkPhoneNumber]"
                placeholder="Entre votre nom"
                type="text"
                variant="solo"
                >
                </v-text-field>

                <v-textarea
                label="Message" 
                v-model="message"
                :rules="[required]"
                variant="solo-filled"
                bg-color="white"
                counter
                rows="3"
                row-height="10"
                ></v-textarea>
                
                <v-btn type="submit">
                    Submit
                </v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    const {apiURL} = useRuntimeConfig();
    
    export default (await  import('vue')).defineComponent({
        data(){
            return{
                nom: 'your name',
                prenom: 'your prenom',
                email: 'your email',
                phone: 'your phone number',
                message: 'your message',
            } 
        },
        methods: {
            async sendEmail(e){
                e.preventDefault();
                // console.log(this.nom)
                console.log(this.nom, this.prenom, this.email, this.phone, this.message);
                const valid = await this.validate();
                
                if(valid){
                    //form is valid, now send the post request to the backend
                    // axios.post(apiURL, {nom, prenom, email, phone, message})
                    // .then()
                    // .catch()
                }
                
            },

            //rule methods to validate the form
            required(value) { return value ? true : 'Field is required'},

            checkPhoneNumber(value) { return (/\d+/).test(value) || 'Incorrect phone number format'},

            async validate () {
                const { valid } = await this.$refs.emailForm.validate()

                return valid;
            },
        }
    })
</script>

<style scoped>
    .email-us-container {
        width: 60rem;
        height: fit-content;
        padding: 5rem 5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: black;
        /* background-color: gray; */

    }

    .title {
        width: 30%;
        height: 60%;
        margin-right: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
    }
    .form-container {
        width: 80%;
        height: 60%;
        /* border: solid 2px green; */
        border-left: solid 4px white;

    }
    .v-form {
        height: 100%;
        padding-left: 2rem;
        display: grid;
        grid-template:
        "firstName lastName"
        "email phoneNumber"
        "message message"
        ". submit-button";
        column-gap: 40px;
    }
    
    .v-textarea {
        grid-area: message;
    }
    .v-btn {
        margin-right: 20px;
        grid-area: submit-button;
        justify-self: end;
        align-self: end;
    }
</style>