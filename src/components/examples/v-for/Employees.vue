<template>
  <ul>
    <h1>TEST</h1>
    <li
      v-for="(employee, index) in employees"
      :key="index">{{ employee.first_name }}

  </li></ul>
</template>

<script>
export default {
  name: 'Employees',
  data() {
    return {
      employees: null
    };
  },
  computed: {
getImagePath(em) {
      return 'http://172.20.20.54/' + em.profile_picture.path;
    },
  },
  created() {
this.getCMSData();
  },
  mounted() {

  },
   async asyncData ({ app }) {
    let url = 'http://172.20.20.54/api/collections/get/Employees?token=account-e8c4868fb7661ecb2c548fa9034b36';
    const { data } = await app.$axios.post(url,
    JSON.stringify({
        sort: {_created:-1},
        populate: 1
      }),
    {
      headers: { 'Content-Type': 'application/json' }
    });
    return { employees: data.entries };
  },
  methods: {

    async getCMSData() {
      await this.$axios.$get('http://172.20.20.54/api/collections/get/Employees?token=account-e8c4868fb7661ecb2c548fa9034b36')
      .then(collection => {
        this.employees = collection.entries;
      });

  },
  }

};
</script>

<style>
</style>
