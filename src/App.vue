<template>
  <div class="min-h-full">
    <div class="bg-gray-800 pb-32">
      <header class="py-10">
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap"
          >
            <div class="ml-4 mt-2">
              <h1
                class="text-3xl font-bold text-white"
                v-if="$route.name === 'home'"
              >
                Parking Permits
              </h1>
              <h1
                class="text-3xl font-bold text-white"
                v-else-if="$route.name === 'create'"
              >
                Create New Parking Permits
              </h1>
            </div>
            <div
              class="ml-4 mt-2 flex-shrink-0"
              v-if="$route.name !== 'create'"
            >
              <button
                type="button"
                @click="$router.push('/create')"
                class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create New Permit
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="max-w-8xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div class="rounded-lg h-96">
            <RouterView />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
