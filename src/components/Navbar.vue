<script setup lang="ts">
</script>

<template>
    <div class="navbar top-0 left-0 right-0 z-50 bg-white shadow-lg border-none">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-5 p-2 shadow-lg bg-base-100 rounded-box w-52">
                    
                    <li>                    
                        <router-link to="/dashboard">Salas de juntas</router-link>
                    </li>
                    <li>                    
                        <router-link to="/reservations">Reservaciones</router-link>
                    </li>
                    <li>                    
                        <router-link to="/dashboard">Usuarios</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl">Dashboard</a>
        </div>
        <div class="navbar-end">
            <label for="my-modal-3" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </label>
        </div>
    </div>
    <!-- End-Navbar -->

    <!-- Search Modal -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle">
    <div class="modal">
        <div class="modal-box relative">
            <label for="my-modal-3"
                class="btn btn-sm btn-circle border-none bg-base-100 text-black font-bold absolute right-2 top-2">???</label>
            <div class="form-control pr-6">
                <input type="text" placeholder="Search" class="input input-bordered bg-base-100 ">
            </div>
        </div>
    </div>
</template>