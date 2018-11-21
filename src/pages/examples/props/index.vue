<template>
  <div>
    <h1 :class="{active:activeClass}">Props <span v-if="activeClass">now with active class</span></h1>
    <Parent @onParentEmittedEvent="onParentEmittedEventHandler" />
  </div>
</template>

<script>
import Parent from '@/components/examples/props/Parent';
export default {
  head: {
    'title': 'Vue Examples - Props'
  },
  components: {
    Parent
  },
  data() {
    return {
      injectedProps: 0,
      activeClass:false
    };
  },
  methods: {
    onParentEmittedEventHandler(className) {
      this.activeClass = this.checkClassName(className);
    },
    checkClassName(className) {
      return className === 'active' ?  true : false;
    }
  }
};
</script>

<style lang="postcss" scoped>
div {
  padding: 3em;

  h1 {
    color: #990;

    &.active {
      color: #f0f;
    }
  }
}
</style>
