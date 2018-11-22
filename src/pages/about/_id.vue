<i18n >
{
  "en": {
    "headline": "About us"
  },
  "de": {
    "headline": "Über uns"
  }
}
</i18n>
<template>
  <div>
    <h1>{{ $t('headline') }}</h1>
    <nuxt-link to="/about">
      <v-btn>Back to overview</v-btn>
    </nuxt-link>
    <div
      v-for="(employee, index) in employees"
      :key="index">
      <Employee
        :first-name="employee.first_name"
        :last-name="employee.last_name"
        :position="employee.title"
        :description="employee.description"
        :is-detail="true"
        :image="getImagePath(employee)" />
    </div>
  </div>
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
  async asyncData ({ app, params }) {

    let url = process.env.EMPLOYEES_API_URL;
    const { data } = await app.$axios.post(url,
    JSON.stringify({
      filter: {_id: params.id},
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
a {
  text-decoration: none;
}
</style>

