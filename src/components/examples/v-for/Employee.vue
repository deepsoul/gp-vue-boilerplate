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
            <h3 class="headline mb-0">{{ firstName }} {{ lastName }}</h3>
            <div>{{ position }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            color="orange">Call </v-btn>
          <v-btn
            color="green">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Employee',
  props: {
    firstName: {
      type: String,
      default:''
    },
    lastName: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  methods: {


  }

};
</script>

<style lang="postcss" scoped>
</style>
