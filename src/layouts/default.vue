<template>
  <div>
    <page-header :navigation="$t('header.navigation')"/>
    <main>
      <transition-page>
        <nuxt/>
      </transition-page>
    </main>
    <page-footer :navigation="$t('footer.navigation')"/>
  </div>
</template>

<script>
import TransitionPage from '../components/transitions/Page.vue';
import PageHeader from '../components/page/Header';
import PageFooter from '../components/page/Footer';

export default {
  components: {
    TransitionPage,
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
</style>

