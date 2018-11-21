<template>
  <button>{{ content }}</button>
</template>

<script>
export default {
props: {
    content: {
      type: String,
      required: true,
      default: 'BaseButton'
    }
  }
};
</script>

<style>
</style>
