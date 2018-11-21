<template>
  <div>
    <h1>Vue Examples</h1>
    <ul>
      <li
        v-for="(item,index) in examples"
        :key="index"><nuxt-link :to="item.url">{{ item.text }}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examples:
        [ {
          'url': '/examples/props',
          'text': 'Props'
        },
        {
          'url': '/examples/watcher',
          'text': 'Watcher'
        },
        {
          'url': '/examples/v-for',
          'text': 'V-For'
        }]
  };
  }
};
</script>

<style lang="postcss" scoped>
div {
  padding: 2em;

  & ul {
    list-style: none;

    & li {
      & a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
