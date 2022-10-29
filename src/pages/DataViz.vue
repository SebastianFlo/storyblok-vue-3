<template>
  <section
    class="rb-data-viz"
    :class="story.theme ? 'theme--' + story.theme : ''"
  >
    <div v-html="renderRichText(story.title)" />
    <div
      v-if="story.dataBlocks && story.dataBlocks.length"
      :style="{ '--rd-column-nb': story.gridColumns || 3 }"
      class="rb-data-viz-grid"
    >
      <component
        :is="vizBlock.component"
        class="rb-data-viz-block"
        v-for="vizBlock in story.dataBlocks"
        :key="vizBlock._uid"
        :blok="vizBlock"
      />
    </div>
  </section>

  <!-- <section>
    <h1>Data Viz</h1>
    <StoryblokComponent v-if="story && story.content" :blok="story.content" />
  </section> -->
</template>

<script>
import { useStoryblok } from '@storyblok/vue';
const storyId = '103366387';
import { inject, ref, watch, onMounted } from 'vue';
// import { gsap } from 'gsap';
import { renderRichText } from '@storyblok/vue';
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

// import '../../assets/styles.scss';

import Vizblock from '../components/Vizblock.vue';
import Textblock from '../components/Textblock.vue';
import Mediablock from '../components/Mediablock.vue';

// import useStoryBridge from '../../composables/useStoryBridge';

export default {
  components: {
    vizBlock: Vizblock,
    textBlock: Textblock,
    mediaBlock: Mediablock,
  },
  setup(props) {
    let story = ref({});

    onMounted(async () => {
      const story = await useStoryblok(storyId, { version: 'draft' });
      console.log(story.value);
      story.value = story.value.content;
    });

    //     const storyblokToken = inject('storyblokToken');
    //     const storyblokBase = inject('storyblokApiBase');

    //     let story = ref({});
    //     let storyId = ref('');
    //     let bridgeLive = ref(false);

    //     onMounted(async () => {
    //       const storiesResponse = await fetch(
    //         `${storyblokBase}/v2/cdn/stories?version=draft&token=${storyblokToken}`
    //       );
    //       const storiesJson = await storiesResponse.json();
    //       storyId.value = storiesJson.stories[0].id;
    //       story.value = storiesJson.stories[0].content;
    //     });

    //     watch(
    //       storyId,
    //       () => {
    //         if (!storyId.value || bridgeLive.value) {
    //           return;
    //         }
    //         useStoryBridge(
    //           storyId.value,
    //           (evStory) => (story.value = evStory.content)
    //         );
    //         bridgeLive.value = true;
    //       },
    //       {
    //         immediate: true,
    //       }
    //     );

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
  width: 98vw;
  padding: 1vw;

  &-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(
      var(--rd-column-nb, 3),
      minmax(calc(50% - 1em), 1fr)
    );
    grid-auto-rows: auto;
    grid-row-gap: 1em;
    grid-column-gap: 1em;

    @include for-mobile {
      grid-template-columns: 1fr;
    }
  }
}
</style>
