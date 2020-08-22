<template>
<div class="component-charts">
  <p>{{ title }}</p>
  <VueApexCharts
    height="350"
    class="component-charts--chart"
    :options="options"
    :type="type"
    :series="series"
  />
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts
  },
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'line'
    },
    series: {
      type: Array,
      default: () => [{
        name: '',
        data: []
      }]
    },
    options: Object
  }
}
</script>

<style lang="scss" scoped>
.component-charts {
  & p {
    font-size: 18px;
    padding-left: 20px;
  }
  &--chart {
    display: inline-flex;
    width: 100%;
  }
}
</style>
