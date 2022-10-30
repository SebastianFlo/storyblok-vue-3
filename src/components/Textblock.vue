<template>
  <section class="rb-textblock">
    <h3>{{ blok.title }}</h3>
    <div v-html="renderRichText(blok.content)" />
  </section>
</template>

<script>
import { watch, ref, toRefs, onMounted, computed } from 'vue';

import { renderRichText } from '@storyblok/vue';

export default {
  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { blok } = toRefs(props);

    return {
      blok,
      renderRichText,
    };
  },
};
</script>

<style lang="scss">
.rb-textblock {
  // border : 1px solid var(--c-dark);
  min-height: 200px;
  padding: var(--spacer-base);

  h3 {
    color: var(--theme-background, #2c3e50);
    font-size: var(--font-size-xlg);
  }

  p {
    padding: var(--spacer-xlg);
    text-align: left;
    line-height: 1.8rem;
  }
}
</style>
