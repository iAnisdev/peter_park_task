<template>
  <main>
    <RecordForm action="update" :recordId="recordId" @update="update"/>
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
  computed:{
    recordId(){
      return this.$route.params.id;
    }
  },
  methods: {
    ...mapActions(useRecordStore , ['updateRecord']),
   async update(record) {
    let data = Object.assign({}, record);
      await this.updateRecord(data);
      this.$router.push("/");
    },
  },
};
</script>
