<template>
  <v-layout>
    <v-flex
      xs12
      sm6
      offset-sm3>
      <v-card>
        <v-img
          :src="image"
          aspect-ratio="2.75"
        />

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ name }}</h3>
            <div>{{ description }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            color="orange"><v-icon>phone</v-icon>Call Coder {{ client.first_name }} </v-btn>
          <nuxt-link :to="getProjectLink(projectId)">
            <v-btn
              color="green">Explore Project</v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Employee',
  props: {
    name: {
      type: String,
      default:''
    },
    description: {
      type: String,
      default: ''
    },
    client: {
      type: Object,
      default: function() {
        return {};
      }
    },
    image: {
      type: String,
      default: ''
    },
    projectId:{
      type: String,
      default: '-1'
    }
  },
  methods: {
    getProjectLink(id) {
      return '/projects/' + id;
    }

  }

};
</script>

<style lang="postcss" scoped>
.v-card__actions a {
  margin-left: 8px;
  text-decoration: none;
}
</style>
