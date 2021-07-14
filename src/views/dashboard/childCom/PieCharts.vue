<template>
  <div class="pie_charts">
    <dv-active-ring-chart :config="config" style="width: 100%; height: 100%" />
  </div>
</template>

<script>
export default {
  name: "PieCharts",
  components: {},
  data() {
    return {
      config: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style  lang="scss" scoped>
.pie_charts {
  width: 100%;
  height: 100%;
  position: relative;
  ::v-deep .dv-active-ring-chart {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
