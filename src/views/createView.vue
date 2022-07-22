<template>
  <main>
    <RecordForm action="new" @save="saveRecord"/>
  </main>
</template>

<script>
import RecordForm from "../components/record-from.vue";
import {useRecordStore} from "../stores/record.js";
import { mapActions } from 'pinia'

export default {
  name: "create-view",
  components: {
    RecordForm,
  },
  methods: {
    ...mapActions(useRecordStore , ['createRecord']),
   async saveRecord(record) {
    let data = Object.assign({}, record);
      await this.createRecord(data);
      this.$router.push("/");
    },
  },
};
</script>
