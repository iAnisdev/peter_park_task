<template>
  <main>
    <div class="flex flex-row-reverse">
      <div>
        <div class="mt-1">
          <input type="text" v-model="filter" name="filter" id="filter"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-3 p-2 rounded-full"
            placeholder="Search Record" />
        </div>
      </div>
    </div>
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
            <a href="#" class="group inline-flex">
              Id
              <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </th>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
            <a href="#" class="group inline-flex">
              Name
              <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            <a href="#" class="group inline-flex">
              Country
              <span class="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            <a href="#" class="group inline-flex">
              Licence Number
              <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                <ChevronDownIcon
                  class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                  aria-hidden="true" />
              </span>
            </a>
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            <a href="#" class="group inline-flex">
              Start Date
              <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                <ChevronDownIcon
                  class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                  aria-hidden="true" />
              </span>
            </a>
          </th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            <a href="#" class="group inline-flex">
              End Date
              <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                <ChevronDownIcon
                  class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                  aria-hidden="true" />
              </span>
            </a>
          </th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white" v-if="filterRecords.length > 0">
        <tr v-for="record in filterRecords" :key="record.id">
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ record.id }}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ record.name }}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ record.country }}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ record.licence }}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ record.startDate }}</td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ record.endDate }}</td>

          <td class="py-4 text-right text-sm font-medium sm:pr-6">
            <div class="flex justify-center">
              <button
                class="mr-2 w-8 h-8 rounded-full bg-blue-800 p-2 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button
                class="mr-2 w-8 h-8 rounded-full bg-red-800 p-2 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-red"
                @click="confirmDelete(record)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="filterRecords.length === 0">
      <div class="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="max-w-max mx-auto">
          <main class="sm:flex">
            <div>
              <h3 class="mt-2 text-sm font-medium text-gray-900">No Permits</h3>
              <p class="mt-1 text-sm text-gray-500" v-if="records.length > 0">No record matching your filters</p>
              <p class="mt-1 text-sm text-gray-500" v-else>Get started by creating a new Permit.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useRecordStore } from "../stores/record.js";
import { mapActions, mapState } from 'pinia'
import { ChevronDownIcon, PlusIcon, TrashIcon } from '@heroicons/vue/solid'
import { PencilIcon } from '@heroicons/vue/outline'
export default {
  name: "home-view",
  data: () => ({
    filter: ''
  }),
  components: {
    ChevronDownIcon,
    PencilIcon,
    TrashIcon,
    PlusIcon
  },
  computed: {
    ...mapState(useRecordStore, ['records']),
    filterRecords() {
      return this.records.filter(record => {
        return record.name.toLowerCase().includes(this.filter.toLowerCase()) || record.country.toLowerCase().includes(this.filter.toLowerCase()) || record.licence.toLowerCase().includes(this.filter.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions(useRecordStore, ['fetchRecords', 'deleteRecord']),
    async confirmDelete(record) {
      let isConfirm = confirm("Are you sure you want to delete this record?")
      if (isConfirm) {
        await this.deleteRecord(record.id)
        await this.fetchRecords();
      }
    }
  },
  mounted() {
    this.fetchRecords();
  },
};
</script>
