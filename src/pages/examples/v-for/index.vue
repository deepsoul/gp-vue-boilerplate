<template>
  <ul>
    <h1>v-for Examples</h1>
    <li
      v-for="(employee, index) in employees"
      :key="index">
      <Employee
        :first-name="employee.first_name"
        :last-name="employee.last_name"
        :position="employee.title"
        :image="getImagePath(employee)" />
  </li></ul>
</template>

<script>
import Employee from '@/components/examples/v-for/Employee';
export default {
  name: 'Employees',
  components: {
    Employee
  },
  data() {
    return {
      employees: null
    };
  },
  async asyncData ({ app }) {

    let url = process.env.EMPLOYEES_API_URL;
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
    getImagePath(employee) {
          return process.env.BASE_URL + employee.profile_picture.path;
        }
  }

};
</script>

<style lang="postcss" scoped>
ul {
  & li {
    margin: 0.5em 0;
    list-style: none;
  }
}
</style>
