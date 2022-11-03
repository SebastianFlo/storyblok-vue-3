<template>
  <!-- <header>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/projects/data-viz">Go to Data Viz</router-link>
  </header> -->
  <section>
    <router-view></router-view>
  </section>
</template>

<script setup>
console.log('App.vue');
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  a {
    padding: 0.5rem;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 1rem;
    border-bottom: 1px solid var(--c-dark);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
