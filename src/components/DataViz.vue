<template>
  <section
    class="rb-data-viz"
    :class="story.theme ? 'theme--' + story.theme : ''"
  >
    <p>{{ $route.params.title }}</p>
    <div class="rb-data-viz--title" v-html="renderRichText(story.title)" />
    <div
      v-if="story.dataBlocks && story.dataBlocks.length"
      :style="{ '--rd-column-nb': story.gridColumns || 3 }"
      class="rb-data-viz--grid"
    >
      <component
        :is="vizBlock.component"
        v-editable="vizBlock"
        class="rb-data-viz--block"
        v-for="vizBlock in story.dataBlocks"
        :key="vizBlock._uid"
        :blok="vizBlock"
      />
    </div>
  </section>
</template>

<script>
import { useStoryblok } from '@storyblok/vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { renderRichText } from '@storyblok/vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import Vizblock from '../components/Vizblock.vue';
import Textblock from '../components/Textblock.vue';
import Mediablock from '../components/Mediablock.vue';

export default {
  components: {
    vizBlock: Vizblock,
    textBlock: Textblock,
    mediaBlock: Mediablock,
  },
  setup(props, context) {
    let story = ref({});
    const route = useRoute();
    // const state = reactive({ story: {} });

    onMounted(async () => {
      const storyResponse = await useStoryblok(route.path, {
        version: 'draft',
      });
      story.value = storyResponse.value.content;

      const sbBridge = new window.StoryblokBridge();

      if (!sbBridge) {
        alert('Bridge not on');
      }

      sbBridge.on(
        ['input', 'published', 'change'],
        ({ story: latestStory }) => {
          console.log(latestStory);
          if (!latestStory) {
            return;
          }
          story.value = latestStory.content;
        }
      );
    });

    return {
      story,
      renderRichText,
    };
  },
};
</script>

<style lang="scss">
@import '../assets/styles.scss';

.rb-data-viz {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--theme-color, #2c3e50);
  // width: 98vw;
  padding: 1vw;

  &--title {
    h1 {
      font-size: 36px;
    }

    b {
      font-weight: 800;
    }

    p {
      font-size: 24px;
      margin-bottom: 12px;
    }

    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color, #2c3e50);
  }

  &--grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(var(--rd-column-nb, 3), 1fr);
    grid-auto-rows: auto;
    grid-row-gap: 1em;
    grid-column-gap: 1em;

    @include for-mobile {
      grid-template-columns: 1fr;
    }
  }

  &--block {
    border-radius: 0px;
    padding: 1rem;
    border: 1px solid var(--border-color, var(--c-dark));
    color: var(--theme-color, var(--c-dark));

    h3 {
      color: var(--theme-color, var(--c-dark));
    }
  }
}
</style>
