<template>
  <v-btn
    :color="color"
    dark>{{ content }}</v-btn>
</template>

<script>
export default {
props: {
    content: {
      type: String,
      required: true,
      default: 'BaseButton'
    },
    color: {
      type: String,
      required: false,
      default: 'green'
    }
  }
};
</script>

<style>
</style>
