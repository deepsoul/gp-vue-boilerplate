<template>
  <v-toolbar-items>
    <nuxt-link
      v-for="(item) in list"
      :key="item.title"
      :to="localePath(item.url)">
      <v-btn flat> {{ item.title }}</v-btn>
    </nuxt-link>
  </v-toolbar-items>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    }
  },
};
</script>

<style lang="postcss" scoped>
.v-toolbar__items {
  & .v-btn {
    height: 50px !important;
  }
}

a {
  display: block;
  padding: 0.5em;
  color: #fff;
  text-decoration: none;

  &.nuxt-link-exact-active {
    color: red;
    background: #ccc;
  }
}
</style>
