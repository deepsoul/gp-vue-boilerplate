<template>
  <div>
    <v-app dark>
      <page-header :navigation="$t('header.navigation')"/>
      <v-content>
        <main>
          <nuxt/>
        </main>
      </v-content>
      <page-footer :navigation="$t('footer.navigation')"/>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '../components/page/Header';
import PageFooter from '../components/page/Footer';

export default {
  components: {
    PageHeader,
    PageFooter
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    };
  }
};
</script>

<style lang="postcss">
body {
  margin: 0;
}

main {
  margin-top: 30px;
}
</style>

