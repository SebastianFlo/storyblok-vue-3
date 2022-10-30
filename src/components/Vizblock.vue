<template>
  <section class="rb-vizblock">
    <h3>{{ blok.title }}</h3>
    <component :is="chartType" :chartData="chartData"></component>
  </section>
</template>

<script>
import { watch, ref, toRefs, onMounted, computed } from 'vue';
import {
  LineChart,
  BarChart,
  PieChart,
  RadarChart,
  DoughnutChart,
  PolarAreaChart,
} from 'vue-chart-3';
import _ from 'lodash';

import { renderRichText } from '@storyblok/vue';

const chartMap = {
  line: 'LineChart',
  bar: 'BarChart',
  pie: 'PieChart',
  radar: 'RadarChart',
  doughnut: 'DoughnutChart',
  polarArea: 'PolarAreaChart',
};

export default {
  components: {
    LineChart,
    BarChart,
    PieChart,
    RadarChart,
    DoughnutChart,
    PolarAreaChart,
  },
  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { blok } = toRefs(props);

    const chartType = computed(() => chartMap[blok.value.chartType]);
    const title = computed(() => blok.value.title);
    const labels = computed(() => blok.value.labels?.split(',') || []);

    // const labels = [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'June',
    // ];

    const chartDataSet = ref([0, 10, 5, 2, 20, 30, 45]);

    const chartData = computed(() => ({
      labels: labels.value,
      datasets: [
        {
          label: title.value,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
          borderColor: 'rgb(255, 99, 132)',
          data: chartDataSet.value,
        },
      ],
    }));

    const options = computed(() => {});

    const activeChart = ref(null);

    onMounted(() => {});

    watch(blok, async (newBlock, oldBlock) => {
      // Check for data change
      if (
        newBlock.api === oldBlock.api &&
        newBlock.customApi === oldBlock.customApi
      ) {
        return;
      }

      // const data = await fetch(newBlock.api, {
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   method: 'GET',
      // });

      const data = await fetch(newBlock.customApi || newBlock.api, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      });

      const response = await data.json();

      console.log('Response', response.data);
      chartDataSet.value = response.data;
    });

    return {
      chartData,
      chartType,

      blok,
      renderRichText,
    };
  },
};
</script>

<style lang="scss">
.rb-vizblock {
  min-height: 250px;
}
</style>
