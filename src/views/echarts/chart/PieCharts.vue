<template>
  <div ref="chartP" class="pie_chart">
		<!-- :style="'width:' + boxWidth + 'px'" -->
    <div
      :id="pieChartId"
      class="chart"
      ref="my_pie_chart"
      style="width: 100%; height: 100%;"
    >
      图表
    </div>
  </div>
</template>

<script>
export default {
  name: "PieCharts",
  components: {},
  props: {
    pieChartSimpleLegend: {
      type: Array,
      default() {
        return [];
      },
    },
    pieChartSimpleData: {
      type: Array,
      default() {
        return [];
      },
    },
    pieChartSimpleColor: {
      type: Array,
      default() {
        return [];
      },
    },
    pieChartSimpleCenter: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  // computed: {
  //   boxWidth: function () {
  //     var winWidth = $(document).width() - 200;
  //     var width = winWidth * 0.25 - 10;
  //     return width;
  //   },
  // },
  data() {
    return {
      pieChartId: "pieChartId",
      myEchart: null,
    };
  },
  watch: {
    pieChartSimpleLegend() {
      this.getPieChatr();
    },
  },
  mounted() {
    this.getPieChatr();
  },
  methods: {
    getPieChatr() {
      let myEchart;
      let domEcharts = document.getElementById(this.pieChartId);
      if (!domEcharts) return;
      //let width = this.$refs.chartP.clientWidth + "px";
      // let height = this.$refs.chartP.clientHeight + "px";
      // domEcharts.style.width = width;
      // domEcharts.style.height = height;
      myEchart = this.$echarts.init(domEcharts);

      // let echartData = [
      //   {
      //     name: "TV",
      //     value: "25",
      //     meone: "999",
      //   },
      //   {
      //     name: "空调",
      //     value: "50",
      //     meone: "1999",
      //   },
      //   {
      //     name: "饼形",
      //     value: "25",
      //     meone: "2999",
      //   },
      // ];

      let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ",");
      };
      let total = this.pieChartSimpleData.reduce((a, b) => {
        return a + b.meone * 1;
      }, 0);
      let option = {
        color: this.pieChartSimpleColor, // 饼形图的颜色数据,
        title: [
          {
            text: "\n{val|" + formatNumber(total) + "}",
            top: "40%",
            left: "30%",
            textStyle: {
              rich: {
                name: {
                  fontSize: 14,
                  fontWeight: "normal",
                  color: "#666666",
                  padding: [10, 0],
                },
                val: {
                  fontSize: 32,
                  fontWeight: "bold",
                  color: "#333333",
                },
              },
            },
          },
        ],
        tooltip: {
          trigger: "item",
          borderColor: "rgba(255,255,255,.3)",
          backgroundColor: "rgba(13,5,30,.6)",
          borderWidth: 1,
          padding: 5,
          formatter: function (parms) {
            var str =
              parms.marker +
              "" +
              parms.data.name +
              "</br>" +
              "金额：" +
              parms.data.value +
              "头</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          },
        },
        legend: {
          left: "5%",
          bottom: "0%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#73747E",
            fontSize: "14",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["45%", "70%"],
            center: this.pieChartSimpleCenter,
            data: this.pieChartSimpleData,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 2,
              },
            },
            labelLine: {
              normal: {
                length: 10,
                length2: 5,
                lineStyle: {
                  color: "#e6e6e6",
                },
              },
            },
            label: {
              normal: {
                formatter: (params) => {
                  return "{meone|" + formatNumber(params.data.meone) + "}";
                },
                rich: {
                  icon: {
                    fontSize: 16,
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: "#666666",
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333333",
                  },
                },
              },
            },
          },
          //显示内层
          {
            name: "",
            type: "pie",
            radius: ["45%", "70%"],
            center: this.pieChartSimpleCenter,
            avoidLabelOverlap: false,
            itemStyle: {
              borderWidth: 3,
              borderColor: "#fff",
            },
            label: {
              color: "#000",
              show: true,
              position: "inner",
              width: 10,
              height: 0,
              lineHeight: 0,
              labelLine: {
                length: 2,
                length2: 10,
              },
              formatter: function (p) {
                let value = p.data.value;
                return "\n{white|" + value + "%}";
              },
              align: "center",
              rich: {
                white: {
                  color: "#fff",
                  align: "center",
                  padding: [3, 0],
                },
              },
            },
            labelLine: {
              show: false,
              // show: true,
            },
            // 饼形图数据
            data: this.pieChartSimpleData,
          },
        ],
      };
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
    width: 100%;
    height: 100%;
  }
}
</style>
