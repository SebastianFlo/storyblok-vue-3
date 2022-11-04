<template>
  <section class="rd-home">
    <h1>Hello world</h1>

    <div class="rd-home--links">
      <router-link to="/projects/data-viz">Go to Data Viz</router-link>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import '../assets/styles.scss';

.rd-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &--links {
    margin-top: 2rem;
    color: var(--c-blue);
    padding: 1rem;
    border: 1px solid var(--c-blue);
  }
}
</style>
