<template>
  <form class="space-y-6">
    <div>
      <label for="name" class="block text-xs font-medium text-gray-900"
        >Country</label
      >
      <div class="mt-1">
        <select
          id="country"
          name="country"
          v-model="record.country"
          class="mt-1 block w-full pl-3 pr-10 p-4 text-base border-gray-300 focus:outline-none placeholder-gray-500 sm:text-sm rounded-md"
          :onchange="updateCountry"
        >
          <option disabled selected value="">Please Select a Country</option>
          <option value="Germany">Germany</option>
          <option value="Switizerland">Switizerland</option>
          <option value="Austria">Austria</option>
          <option value="France">France</option>
        </select>
      </div>
    </div>
    <div>
      <label for="licence" class="block text-xs font-medium px-1 text-gray-900"
        >Licence Number</label
      >
      <div class="mt-2">
        <input
          type="text"
          name="licence"
          id="licence"
          v-model="record.licence"
          :disabled="record.country === ''"
          class="block w-full border-0 p-4 rounded-md text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Licence Plate Number"
        />
      </div>
    </div>

    <div>
      <label
        for="startDate"
        class="block text-xs font-medium px-1 text-gray-900"
        >Start Date</label
      >
      <div class="mt-2">
        <input
          type="date"
          name="startDate"
          id="startDate"
          v-model="record.startDate"
          class="block w-full border-0 p-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label for="endDate" class="block text-xs font-medium px-1 text-gray-900"
        >End Date</label
      >
      <div class="mt-2">
        <input
          type="date"
          name="endDate"
          id="endDate"
          v-model="record.endDate"
          class="block w-full border-0 p-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label for="name" class="block text-xs font-medium px-1 text-gray-900"
        >Name</label
      >
      <div class="mt-2">
        <input
          type="text"
          name="name"
          id="name"
          v-model="record.name"
          class="block w-full border-0 p-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Jane Smith"
        />
      </div>
    </div>

    <div class="pt-1">
      <div class="flex justify-end">
        <button
          type="button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          v-if="action === 'new'"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
        <button
          type="submit"
          v-if="action === 'update'"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "RecordForm",
  props: {
    action: {
      type: String,
      default: "new",
    },
    recordId: {
      type: Number,
      default: null,
    },
  },
  setup() {
    const record = ref({
      name: "",
      country: "",
      licenceNumber: "",
      startDate: "",
      endDate: "",
    });
    const showLicenceInput = computed(() => {
      return record.value.country !== "";
    });
    function updateCountry(value) {
      record.value.country = value.target.value;
    }
    return {
      record,
      showLicenceInput: showLicenceInput.value,
      updateCountry,
    };
  },
};
</script>
