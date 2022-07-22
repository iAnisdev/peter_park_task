<template>
    <form class="space-y-6" @submit.prevent>
        <div>
            <label for="name" class="block text-xs font-medium text-gray-900">Country</label>
            <div class="mt-1">
                <select id="country" name="country" v-model="record.country" required
                    class="mt-1 block w-full pl-3 pr-10 p-4 text-base border-gray-300 focus:outline-none placeholder-gray-500 sm:text-sm rounded-md"
                    :onchange="updateCountry">
                    <option disabled selected value="">Please Select a Country</option>
                    <option value="Germany">Germany</option>
                    <option value="Switizerland">Switizerland</option>
                    <option value="Austria">Austria</option>
                    <option value="France">France</option>
                </select>
            </div>
        </div>
        <div>
            <label for="licence" class="block text-xs font-medium px-1 text-gray-900">Licence Number</label>
            <div class="mt-2">
                <input type="text" name="licence" id="licence" v-model="record.licence"
                    class="block w-full border-0 p-4 rounded-md text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Licence Plate Number" :disabled="record.country === ''" required />
                <p class="mt-2 text-sm text-red-600" id="email-error" v-if="isInvalidLicence">Invalid Licene Number for
                    {{ record.country }}</p>
            </div>
        </div>

        <div>
            <label for="startDate" class="block text-xs font-medium px-1 text-gray-900">Start Date</label>
            <div class="mt-2">
                <input type="date" name="startDate" id="startDate" v-model="record.startDate" required
                    class="block w-full border-0 p-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" />
            </div>
        </div>

        <div>
            <label for="endDate" class="block text-xs font-medium px-1 text-gray-900">End Date</label>
            <div class="mt-2">
                <input type="date" name="endDate" id="endDate" v-model="record.endDate" :min="record.startDate" required
                    class="block w-full border-0 p-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" />
            </div>
        </div>

        <div>
            <label for="name" class="block text-xs font-medium px-1 text-gray-900">Name</label>
            <div class="mt-2">
                <input type="text" name="name" id="name" v-model="record.name"
                    class="block w-full border-0 p-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Jane Smith" />
            </div>
        </div>
        <div class="pt-1 px-2" v-if="action === 'update'">
            <SwitchGroup as="div" class="flex items-center justify-between">
                <span class="flex-grow flex flex-col">
                    <SwitchLabel as="span" class="text-sm font-medium text-gray-900" passive>Permit status
                    </SwitchLabel>
                </span>
                <Switch v-model="record.status"
                    :class="[record.status ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                    <span aria-hidden="true"
                        :class="[record.status ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                </Switch>
            </SwitchGroup>
        </div>
        <div class="pt-1">
            <div class="flex justify-end">
                <button type="button" @click="$router.push('/')"
                    class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                </button>
                <button type="submit" v-if="action === 'new'" @click="saveRecord"
                    class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                </button>
                <button type="submit" v-if="action === 'update'" @click="updateRecord"
                    class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Update
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { computed, ref } from "vue";
import { mapActions } from 'pinia'
import { useRecordStore } from "../stores/record.js";
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

export default {
    name: "RecordForm",
    props: {
        action: {
            type: String,
            default: "new",
        },
        recordId: {
            type: String,
            default: null,
        },
    },
    components: {
        Switch,
        SwitchGroup,
        SwitchLabel,
    },
    setup(props, { emit }) {
        const record = ref({
            id: null,
            name: "",
            country: "",
            license: "",
            startDate: "",
            endDate: "",
        });
        const showLicenceInput = computed(() => {
            return record.value.country !== "";
        });
        let isInvalidLicence = ref(false)
        function updateCountry(value) {
            record.value.country = value.target.value;
            record.value.license = "";
            isInvalidLicence = ref(false);
        }
        async function saveRecord(e) {
            if (this.isInvalidLicence) {
                alert('Invalid Licence Number for ' + record.value.country);
            }
            else {
                await emit('save', record.value);
            }
        }

        async function updateRecord(e) {
            if (this.isInvalidLicence) {
                alert('Invalid Licence Number for ' + record.value.country);
            }
            else {
                await emit('update', record.value);
            }
        }
        return {
            record,
            showLicenceInput: showLicenceInput.value,
            updateCountry,
            isInvalidLicence: isInvalidLicence.value,
            saveRecord,
            updateRecord,
        }
    },
    watch: {
        record: {
            deep: true,
            handler(newVal, oldVal) {
                if (newVal.licence !== '' && newVal.licence !== undefined) {
                    //match the license number with regex for each country
                    switch (newVal.country) {
                        case "Germany":
                            if (!/^[A-ZÄÖÜ]{1,3}\-[ ]{0,1}[A-Z]{0,2}[0-9]{1,4}[H]{0,1}/.test(newVal.licence)) {
                                this.isInvalidLicence = true;
                            } else {
                                this.isInvalidLicence = false;
                            }
                            break;
                        case "Switizerland":
                            if (!/^[a-zA-Z]{1,3} \d{2,6}$/.test(newVal.licence)) {
                                this.isInvalidLicence = true;
                            } else {
                                this.isInvalidLicence = false;
                            }
                            break;
                        case "Austria":
                            if (!/^[a-zA-Z]{1,3}-[a-zA-Z]{1,2} \d{1,4}$/.test(newVal.licence)) {
                                this.isInvalidLicence = true;
                            } else {
                                this.isInvalidLicence = false;
                            }
                            break;
                        case "France":
                            if (!/^(?!ss|ww|.[iou]|[iou].)[a-z]{2}[-\s]?\d{3}[-\s]?(?!ss|ww|.[iou]|[iou].)[a-z]{2}$/i.test(newVal.licence)) {
                                this.isInvalidLicence = true;
                            } else {
                                this.isInvalidLicence = false;
                            }
                            break;
                        default:
                            this.isInvalidLicence = false;
                            break;
                    }
                } else {
                    this.isInvalidLicence = false;
                }
            }
        }
    },
    methods: {
        ...mapActions(useRecordStore, ['fetchRecord']),
    },
    async mounted() {
        if (this.action === 'update') {
            let record = await this.fetchRecord(this.recordId)
            this.record = record;
        }
    }
}

</script>
