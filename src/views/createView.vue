<template>
  <main>
    <RecordForm action="new" @save="saveRecord"/>
  </main>
</template>

<script>
import RecordForm from "../components/record-from.vue";

export default {
  name: "create-view",
  components: {
    RecordForm,
  },
  methods: {
   async saveRecord(record) {
    
    },
  },
};
</script>
