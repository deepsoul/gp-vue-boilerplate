<template>
  <div>
    <p>
      {{ firstName }} {{ lastName }}
    </p>
    <img
      :src="image"
    >
  </div>
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
div {
  padding: 1em;
  background: #ccc;
  border-bottom: 1px solid #000;

  & img {
    width: 200px;
  }
}
</style>
