<template>
  <v-footer class="blue darken-2">
    <v-layout
      row
      wrap
      align-center>
      <v-flex xs12>
        <div class="white--text ml-3">
          Made with
          <v-icon class="red--text">favorite</v-icon>
          by <a
            class="white--text"
            href="https://www.grabarzundpartner.de"
            target="_blank">Grabarz und Partner</a>
          and <a
            class="white--text"
            href="https://github.com/GrabarzUndPartner">G&amp;P-Dev-Team</a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import LinkList from '~/components/molecules/LinkList';

export default {
  components: {
    'link-list': LinkList
  },
  props: {
    navigation: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    }
  }
};
</script>
