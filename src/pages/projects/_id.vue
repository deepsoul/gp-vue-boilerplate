<template>
  <div>
    <h1>Projects Details</h1>
    <nuxt-link to="/projects">
      <v-btn>Back to projects</v-btn>
    </nuxt-link>
    <div
      v-for="(project, index) in projects"
      :key="index">
      <Project
        :name="project.name"
        :description="project.description"
        :client="project.client"
        :project-id="project._id"
        :image="getImagePath(project)" />
    </div>
  </div>
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
  async asyncData ({ app, params }) {

    let url = process.env.PROJECTS_API_URL;
    const { data } = await app.$axios.post(url,
    JSON.stringify({
      filter: {_id:params.id},
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
a {
  text-decoration: none;
}
</style>
