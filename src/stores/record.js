import { defineStore } from "pinia";

export const useRecordStore = defineStore('record', {
    state: () => ({
        record: {},
        records: [],
    }),
    actions: {
        async getRecord({ commit }, id) {
            const record = await this.api.getRecord(id);
            commit("setRecord", record);
        },
        async getRecords({ commit }) {
            const records = await this.api.getRecords();
            commit("setRecords", records);
        }
    }

})