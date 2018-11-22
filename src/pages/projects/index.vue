<template>
  <ul>
    <h1>Projects Examples</h1>
    <li
      v-for="(project, index) in projects"
      :key="index">
      <Project
        :name="project.name"
        :description="project.description"
        :client="project.client"
        :project-id="project._id"
        :image="getImagePath(project)" />
  </li></ul>
</template>

<script>
import Project from '@/components/examples/projects/Project';
export default {
  name: 'Projects',
  components: {
    Project
  },
  data() {
    return {
      projects: null
    };
  },
  async asyncData ({ app }) {

    let url = process.env.PROJECTS_API_URL;
    const { data } = await app.$axios.post(url,
    JSON.stringify({
        sort: {_created:-1},
        populate: 1
      }),
    {
      headers: { 'Content-Type': 'application/json' }
    });
    return { projects: data.entries };
  },
  methods: {
    getImagePath(project) {
          return process.env.BASE_URL + project.image.path;
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
