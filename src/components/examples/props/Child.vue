<template>
  <div>
    <gp-base-button
      :content="'Emit Event from Child'"
      @click.native="emitEvent"/>
    <h2>External Counter {{ valueComesFromParent }}</h2>
    <h2>Internal Counter {{ valueComesFromData }}</h2>
  </div>
</template>

<script>
export default {
  name:'ChildComponent',
  props: {
    valueComesFromParent: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      valueComesFromData: 0
    };
  },
  methods: {
    emitEvent() {
      let cValue = Math.random() * 400;
      let className = 'non-active';
      if(cValue < 300) {
        className = 'active';
      }
      this.$emit('onChildEvent',{someClass:className, someValue: cValue});
      this.valueComesFromData +=2;
    }
  }
};
</script>

<style>
</style>
