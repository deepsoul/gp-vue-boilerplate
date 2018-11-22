<template>
  <div>
    <h1>Watcher</h1>

    <v-flex
      xs12
      sm6
      md6>
      <v-text-field
        label="Solo"
        placeholder="Please put change value"
        solo
        @change="onChangeValueToWatch"
      />
    </v-flex>
    <h2 v-if="dontCallPolice">No need for Police</h2>
    <v-flex
      v-else
      xs12
      sm6
      md6>
      <v-alert

        :value="true"
        type="error"
        color="red"
      >
        Call the police immadiately
      </v-alert>
    </v-flex>
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
    onChangeValueToWatch(value) {
      this.valueToWatch = value;
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
