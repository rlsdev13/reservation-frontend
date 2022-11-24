<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { fetchData } from '../lib/fetch';
import Swal from 'sweetalert2';
const authUrl = import.meta.env.VITE_AUTH_URL;

const email: Ref<string> = ref('rafael@gmail.com');
const password: Ref<string> = ref('123456');
const route = useRouter();

async function login() {
    const data = {
        email : email.value,
        password : password.value
    }

    const response = await fetchData( authUrl, data, 'POST' );
    if(response.status != 201 ){
        Swal.fire('Usuario o contraseña incorrectos','','error');
        return;
    }
    const { access_token, user } = await response.json();
    localStorage.setItem( 'token', access_token );
    localStorage.setItem( 'user', JSON.stringify(user));
    route.push('/dashboard')
}

</script>

<template>
    <div class="bg-no-repeat bg-cover bg-center relative" style="background-color: aquamarine;">
        <div class="absolute bg-gradient-to-b from-aquamarine-500 to-aquamarine-400 opacity-75 inset-0 z-0"></div>
        <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">

            <div class="flex justify-center self-center  z-10">
                <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div class="mb-4">
                        <h3 class="font-semibold text-2xl text-gray-800">Iniciar sesión </h3>
                        <p class="text-gray-500">Inicie sesión en su cuenta.</p>
                    </div>
                    <form v-on:submit.prevent="login">
                        <div class="space-y-5">
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700 tracking-wide">Correo</label>
                                <input v-model="email"
                                    class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="email" placeholder="user@gmail.com">
                            </div>
                            <div class="space-y-2">
                                <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    Contraseña
                                </label>
                                <input
                                    class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="password" placeholder="contraseña" v-model="password">
                            </div>
                            <div class="flex items-center justify-between">
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>