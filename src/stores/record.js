import { defineStore } from "pinia";
import Api from "../plugins/Api";
export const useRecordStore = defineStore('record', {
    state: () => ({
        record: {},
        records: [],
    }),
    getters: {
        getRecord: state => state.record,
        getRecords: state => state.records,
    },
    actions: {
        async fetchRecord(id) {
            const record = await Api().get(`/permits/${id}`);
            this.record = record.data
            return this.record
        },
        async fetchRecords() {
            const record = await Api().get('/permits');
            this.records =  record.data;
        },
        async createRecord(record) {
            await Api().post("/permits", record);
        },
        async updateRecord(record) {
            const updatedRecord = await Api().put(`/permits/${record.id}`, record);
        },
        async deleteRecord(id) {
            await Api().delete(`/permits/${id}`);
            this.record =  {}
        }
    }

})