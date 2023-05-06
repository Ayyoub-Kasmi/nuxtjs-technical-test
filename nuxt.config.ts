// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Technical Test"
        }
    },
    css: [
        'vuetify/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    runtimeConfig: {
        public: {
            apiURL : process.env.BACKEND_API_URL,
        }
    }
})
