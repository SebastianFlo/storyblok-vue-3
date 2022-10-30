<template>
  <section class="rb-mediablock">
    <div v-if="isImage(blok.media.filename)">
      <img :src="blok.media.filename" />
    </div>
    <div v-if="isVideo(blok.media.filename)">
      <video :src="blok.media.filename" />
    </div>
  </section>
</template>

<script>
import { watch, ref, toRefs, onMounted, computed } from 'vue';

export default {
  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { blok } = toRefs(props);

    const isImage = (filename) => {
      return (
        filename.endsWith('.jpg') ||
        filename.endsWith('.png') ||
        filename.endsWith('.gif') ||
        filename.endsWith('.svg')
      );
    };

    const isVideo = () => {};

    return {
      blok,
      isImage,
      isVideo,
    };
  },
};
</script>

<style lang="scss">
.rb-mediablock {
  min-height: 200px;

  img {
    width: 100%;
  }
}
</style>
