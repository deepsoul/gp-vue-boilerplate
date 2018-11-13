<template>
  <Child
    :value-comes-from-parent="injectedProps"
    @onChildEvent="onChildEventHandler" />
</template>

<script>
import Child from '@/components/examples/props/Child';
export default {
  name:'ParentComponent',
  components: {
    Child
  },
   data() {
    return {
      injectedProps: 0,
    };
  },
  methods: {
    onChildEventHandler(event) {
      this.injectedProps = Math.round(event.someValue);
      this.$emit('onParentEmittedEvent', event.someClass);
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>
