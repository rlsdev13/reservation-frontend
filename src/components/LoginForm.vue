<script setup lang="ts">
</script>

<template>
    <div class="bg-no-repeat bg-cover bg-center relative"
        style="background-color: aquamarine;">
        <div class="absolute bg-gradient-to-b from-aquamarine-500 to-aquamarine-400 opacity-75 inset-0 z-0"></div>
        <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            
            <div class="flex justify-center self-center  z-10">
                <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                    <div class="mb-4">
                        <h3 class="font-semibold text-2xl text-gray-800">Iniciar sesión </h3>
                        <p class="text-gray-500">Inicie sesión en su cuenta.</p>
                    </div>
                    <div class="space-y-5">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 tracking-wide">Correo</label>
                            <input
                                class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                type="" placeholder="user@gmail.com">
                        </div>
                        <div class="space-y-2">
                            <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                Contraseña
                            </label>
                            <input
                                class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                type="" placeholder="contraseña">
                        </div>
                        <div class="flex items-center justify-between">
                        </div>
                        <div>
                            <button type="submit"
                                class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                Iniciar sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<style lang="" scoped>
</style>