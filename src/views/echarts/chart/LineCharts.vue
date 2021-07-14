<template>
  <div class="line_chart">
    <div class="chart" ref="line_chart"></div>
  </div>
</template>

<script>
export default {
  name: "LineCharts",
  components: {},
  props: {
    weeklyX: {
      type: Array,
      default() {
        return [];
      },
    },
    // 需要传递的数据
    weeklyData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.getLineChart();
  },
  // 监听传递进来的数据 为了更新 eachrts上的数据 因为在mounted需要除此下次
  watch: {
    weeklyData(newV){
      this.getLineChart(newV);
    }
  },
  methods: {
    getLineChart() {
      //01：初始化echart实例对象
      let lineChart = this.$echarts.init(this.$refs.line_chart);

      //02：配置选项和数据
      let option = {
        xAxis: {
          type: "category",
          data: this.weeklyX, // x轴的数据
          axisTick: {
            show: false, //把x轴的坐标轴 刻度去掉
          },
          /*改变x轴颜色*/
          axisLine: {
            lineStyle: {
              color: "#ccc",
              width: 1, //这里是为了突出显示加上的
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: 10,
              color: "#666",
            },
          },
        },
        yAxis: {
          type: "value",
          // y轴刻度的设置
          max: 2000,
          min: 0,
          minInterval: 0,
          interval: 500, //每次增加几
          axisLabel: {
            // y轴的字体
            textStyle: {
              fontSize: 10,
              color: "#666",
            },
          },
          axisTick: {
            show: false, //把y轴的坐标轴 刻度去掉
          },
          axisLine: {
            show: false, //是否显示坐标轴轴线。
          },
          splitLine: {
            lineStyle: {
              color: "#f8f8f8", // y轴的分割线
            },
          },
        },
        // 调整图的 位置
        grid: {
          left: "0",
          top: "10",
          right: "0",
          bottom: "0",
          containLabel: true,
        },
        series: [
          {
            data: this.weeklyData, // 折现图的数据

            type: "line",
            // 设置拐点 相关的
            symbolSize: 10,
            itemStyle: {
              borderColor: "#3987ed",
              borderWidth: 3,
              color: "#333",
            },
            // y折轴线 的颜色
            lineStyle: {
              color: "#3887ed",
            },
            emphasis: {
              // 鼠标经过时：
              color: "#3987ed",
              borderColor: "#3987ed",
            },
            label: {
              normal: {
                show: true, // 折线上的文字是否显示
                position: [-15, -18],
                fontSize: 10,
              },
            },

            // 渐变
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#1568F6",
                },
                {
                  offset: 1,
                  color: "rgba(4,182,243,0.00) ",
                },
              ]),
            },
          },
        ],
      };

      //03：把配置项给实例对象，显示数据
      lineChart.setOption(option);
    },
  },
};
</script>
<style  lang="scss" scoped>
.line_chart {
  width: 100%;
  height: 100%;
  background: #eee;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>