<template>
  <div class="column_charts">
    <dv-capsule-chart :config="config" style="width: 100%; height: 100%" />
  </div>
</template>

<script>
export default {
  name: "ColumnCharts",
  components: {},
  data() {
    return {
      config: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 67,
          },
          {
            name: "漯河",
            value: 123,
          },
          {
            name: "郑州",
            value: 55,
          },
          {
            name: "西峡",
            value: 98,
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style  lang="scss" scoped>
.column_charts {
  position: relative;
  width: 100%;
  height: 100%;
  ::v-deep .dv-capsule-chart{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
