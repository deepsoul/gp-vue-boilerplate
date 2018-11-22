<template>

  <v-toolbar
    color="primary"
    dark
    fixed>

    <Snackbar
      :snackbar="showSnackBar"
      :text="snackBarText"
      @closeSnackBar="onSnackbarClose" />

    <v-toolbar-title
      class="white--text">{{ title }}</v-toolbar-title>

    <v-spacer/>

    <nav>
      <link-list :list="navigation"/>
    </nav>

    <nuxt-link
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"><v-btn flat>{{ locale.code }}</v-btn></nuxt-link>

    <v-btn
      icon
      @click="showSnackbar('OMG - a really cool snackbar')">
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn
      icon
      @click="showSnackbar(snackBarText)">
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn
      icon
      @click="showSnackbar('This is how a snackbar goes')">
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn
      icon
      @click="showSnackbar('OK - you got it!!')">
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>


<script>
import LinkList from '~/components/molecules/ToolBarLinkList';
import Snackbar from '~/components/molecules/Snackbar';

export default {
  components: {
    LinkList,
    Snackbar
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
        title: 'G&P Boilerplate Examples',
        showSnackBar: false,
        snackBarText: 'OMG - a snackbar'
    };
  },

  mounted() {
     //console.log(this.$i18n);
  },
  methods: {
    showSnackbar(text) {
      this.showSnackBar = true;
      this.snackBarText = text;
    },
    onSnackbarClose() {
      this.showSnackBar = false;
    }
  }
};
</script>
<style lang="postcss" scoped>
.v-toolbar {
  position: fixed;
}

a {
  color: #fff;
}

p {
  & a {
    color: #fff;
  }
}
</style>

