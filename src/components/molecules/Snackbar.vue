<template>
  <v-snackbar
    v-model="snackbar"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="x === 'right'"
    :timeout="timeout"
    :top="y === 'top'"
    :vertical="mode === 'vertical'"
  >
    {{ text }}
    <v-btn
      color="pink"
      flat
      @click="onSnackbarClose"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    bottom: {
      type: String,
      default : 'bottom'
    },
    timeout: {
      type: Number,
      default: 0
    },
    snackbar : {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'OMG - a Snackbar'
    },
    y: {
      type: String,
      default: 'top'
    },
    x: {
      type: String,
      default: 'right'
    },
    mode: {
      type: String,
      default: 'multi-line'
    }
  },
  methods: {
    onSnackbarClose() {
      this.$emit('closeSnackBar');
    }
  }
};
</script>

<style>
</style>
