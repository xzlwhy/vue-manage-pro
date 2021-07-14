<template>
  <div ref="chartP" class="pie_chart">
    <div
      :id="roseChartsId"
      class="chart"
      ref="my_pie_chart"
      :style="'width:' + boxWidth + 'px'"
    >
      图表
    </div>
  </div>
</template>

<script>
export default {
  name: "RoseCharts",
  components: {},
  data() {
    return {
      roseChartsId: "roseChartsId",
      myEchart: null,
      boxWidth: 200,
    };
  },
  mounted() {
    this.getPieChatr();
  },
  methods: {
    getPieChatr() {
      let myEchart;
      let domEcharts = document.getElementById(this.roseChartsId);
      if (!domEcharts) return;
      let width = this.$refs.chartP.clientWidth + "px";
      let height = this.$refs.chartP.clientHeight + "px";
      domEcharts.style.height = height;
      domEcharts.style.width = width;
      myEchart = this.$echarts.init(domEcharts);

      let option = {
        title: {
          text: "南丁格尔玫瑰图",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            "rose6",
            "rose7",
            "rose8",
          ],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 100],
            center: ["20%", "50%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 33, name: "rose 2" },
              { value: 28, name: "rose 3" },
              { value: 22, name: "rose 4" },
              { value: 20, name: "rose 5" },
              { value: 15, name: "rose 6" },
              { value: 12, name: "rose 7" },
              { value: 10, name: "rose 8" },
            ],
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [20, 120],
            center: ["70%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 30, name: "rose 1" },
              { value: 28, name: "rose 2" },
              { value: 26, name: "rose 3" },
              { value: 24, name: "rose 4" },
              { value: 22, name: "rose 5" },
              { value: 20, name: "rose 6" },
              { value: 18, name: "rose 7" },
              { value: 16, name: "rose 8" },
            ],
          },
        ],
      };

      //03:使用指定的配置项给实例对象，用于数据显示图表。
      myEchart.setOption(option);
    },
  },
};
</script>
<style  lang="scss" scoped>
.pie_chart {
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: #fff;
  .chart {
    width: 96%;
    height: 96%;
  }
}
</style>
