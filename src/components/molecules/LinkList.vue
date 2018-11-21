<template>
  <ul>
    <li
      v-for="(item) in list"
      :key="item.title">
      <nuxt-link :to="localePath(item.url)">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
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
ul {
  display: inline-flex;
  list-style: none;

  & li {
    padding: 0 0.5em;

    & a {
      padding: 0.5em;
      text-decoration: none;

      &.nuxt-link-exact-active {
        color: red;
        background: #ccc;
      }
    }
  }
}
</style>
