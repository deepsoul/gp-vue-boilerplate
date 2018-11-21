<template>
  <div>
    <h1>Watcher</h1>
    <input
      ref="myInput"
      placeholder="Please put change value"
      type="text"
      @change="onChangeValueToWatch">
    <h2 v-if="dontCallPolice">No need for Police</h2>
    <h2 v-else>Call the POLICE, NOW!!!</h2>
  </div>
</template>

<script>
export default {
  name: 'Watcher',
  data() {
    return {
      valueToWatch: 'value',
      dontCallPolice: true
    };
  },
  watch: {
    valueToWatch: function(value) {
      //KEINE ARROW FUNKTIONEN VERWENDEN
      if(parseInt(value) === 110) {
        this.dontCallPolice = false;
      } else {
        this.dontCallPolice = true;
      }
    }
  },
  mounted() {
    //this.$refs.myInput.addEventListener('change', this.onChangeValueToWatch);
  },
  methods: {
    onChangeValueToWatch(event) {
      this.valueToWatch = event.target.value;
    }
  }
};
</script>

<style lang="postcss" scoped>
input {
  width: 300px;
  height: 20px;
}
</style>
