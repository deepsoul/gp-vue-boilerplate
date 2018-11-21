<template>

  <v-toolbar
    color="primary"
    dark
    fixed
    extended
    height="40">
    <v-toolbar-side-icon/>

    <v-toolbar-title
      slot="extension"
      class="white--text">{{ title }}</v-toolbar-title>

    <v-spacer/>

    <nav>
      <link-list :list="navigation"/>
    </nav>
    <nuxt-link
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.code }}</nuxt-link>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>


<script>
import LinkList from '~/components/molecules/LinkList';

export default {
  components: {
    LinkList
  },
  props: {
    navigation: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    }
  },
  data () {
    return {
        title: 'G&P Boilerplate Examples'
    };
  },

  mounted() {
    // console.log(this.navigation);
  }
};
</script>
