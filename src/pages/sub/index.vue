<i18n>
{
  "en": {
    "test": "message23",
    "hello": "hello world!"
  },
  "de": {
    "test": "nachricht 123",
    "hello": "hallo welt"
  }
}
</i18n>

<template>
  <div class="layout">
    <!-- <headline :content="$t('test')"/>
    hello2 huhu234 {{ $t('configxyz') }}
    {{ $t('test') }}
    <br> -->
    <nav><div>NAV</div></nav>
    <article><div>ARTICLE</div></article>
    <aside><div>ASIDE</div></aside>

  </div>
</template>

<script>
import Headline from '~/components/atoms/Headline';

export default {
  nuxtI18n: {
    paths: {
      en: '/sub',
      de: '/unter'
    }
  },
  components: {
    headline: Headline
  },

  head () {
    return {
      title: 'title of page'
    };
  }
};
</script>

<style lang="postcss">
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.layout {
  /* stylelint-disable */
  /* prettier-ignore */
  grid-kiss:
    "+--------------------------+       "
    "|             ^            |       "
    "|         <  nav  >        | 200px "
    "|             v            |       "
    "+--------------------------+       "
    "+--------------------------+       "
    "|          article         |       "
    "+--------------------------+       "
    "+--------------------+ +---+       "
    "|        aside       | |   |       "
    "+--------------------+ +---+       "
    "|         70%        | |30%|       "
  ;
  /* stylelint-enable */

  @media (min-width: 768px) {
    /* stylelint-disable */
    /* prettier-ignore */
    grid-kiss:
      "╔═══════╗  ╔════════════════╗      "
      "║       ║  ║     article    ║      "
      "║   ↑   ║  ╚════════════════╝      "
      "║  nav  ║  ╔════╗  ╔════════╗      "
      "║       ║  ║    ║  ║ aside  ║ 240px"
      "╚═ 25% ═╝  ╚════╝  ╚═ 20em ═╝      "
    ;
    /* stylelint-enable */
  }

  & nav {
    background: red;
  }

  & article {
    background: blue;
  }

  & aside {
    background: violet;
  }
}
</style>

