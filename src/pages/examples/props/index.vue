<template>
  <div>
    <h1 :class="{active:activeClass}">Props
      <v-alert
        :value="activeClass"
        color="green"
        type="success">
        This is a success alert.
      </v-alert>

    </h1>
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

  & h1 {
    color: rgb(255, 0, 0);

    &.active {
      color: rgb(0, 255, 30);
    }
  }
}
</style>
