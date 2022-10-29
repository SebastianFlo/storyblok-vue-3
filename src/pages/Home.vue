<template>
  <StoryblokComponent v-if="story && story.content" :blok="story.content" />
</template>

<script setup>
import { useStoryblok } from '@storyblok/vue';
const homeStoryId = 'YOU_HOME_ID';
const story = await useStoryblok(homeStoryId, { version: 'draft' });
console.log(story.value.content);
</script>
