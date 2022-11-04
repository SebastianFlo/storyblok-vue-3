<template>
  <section
    class="seftek-spacer"
    :class="[
      blok.theme && `theme--${blok.theme}`,
      blok.space && `seftek-spacer--${blok.space}`,
      blok.mobileSpace && `seftek-spacer--${blok.mobileSpace}__mobile`,
    ]"
  ></section>
</template>

<script>
export default {
  components: {},
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss">
.seftek-spacer {
  width: 100%;

  background-color: var(--theme-background, transparent);

  .sf-divider {
    border-bottom: none;
  }

  &--lg {
    padding: var(--spacer-3xl) var(--spacer-base);
  }

  &--base {
    padding: var(--spacer-xl) var(--spacer-base);
  }

  &--sm {
    padding: var(--spacer-sm) var(--spacer-base);
  }

  @include for-mobile {
    &--lg__mobile {
      padding: var(--spacer-2xl) var(--spacer-base);
    }

    &--base__mobile {
      padding: var(--spacer-base) var(--spacer-base);
    }

    &--sm__mobile {
      padding: var(--spacer-xs) var(--spacer-base);
    }
  }
}
</style>
