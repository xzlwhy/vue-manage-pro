<template>
  <div class="echarts_wrap clear_fix">
    <div class="left_chart">
      <RoseCharts />
    </div>
    <div class="right_chart">
      <div class="right_chart_top clear_fix">
        <div class="right_chart_top_pie">
          <PieCharts
            :pieChartSimpleColor="pieChartSimpleColor"
            :pieChartSimpleCenter="pieChartSimpleCenter"
            :pieChartSimpleData="pieChartSimpleData"
          />
        </div>
        <div class="right_chart_top_line">
          <div class="select">
            <XSelect
              :subject="depositSubject"
              @changeSelect="changeSelect"
              :defaultValue="defaultValue"
              selectWidth="90"
              selectHeight="24"
              @hideLoading="hideLoading"
              :currentNum="currentNum"
              userType="depositSelect"
            ></XSelect>
          </div>
          <LineCharts :weeklyData="weeklyData" :weeklyX="weeklyX"/>
        </div>
      </div>
      <div class="bubble_charts">
        <BubbleCharts />
      </div>
    </div>
  </div>
</template>

<script>
import RoseCharts from "./chart/RoseCharts";
import PieCharts from "./chart/PieCharts";
import LineCharts from "./chart/LineCharts";
import XSelect from "@/views/componentC/select/Select.vue";
import BubbleCharts from "./chart/BubbleCharts"
export default {
  name: "Echarts",
  components: {
    RoseCharts,
    PieCharts,
    LineCharts,
    XSelect,
    BubbleCharts,
  },
  data() {
    return {
      pieChartSimpleColor: ["#58D5FF", "#73ACFF", "#FDD56A"],
      pieChartSimpleCenter: ["45%", "50%"],
      pieChartSimpleData: [
        {
          name: "TV",
          value: "25",
          meone: "999",
        },
        {
          name: "空调",
          value: "50",
          meone: "1999",
        },
        {
          name: "饼形",
          value: "25",
          meone: "2999",
        },
      ],
      // 折线图的
      weeklyData: [1500, 1400, 1200, 1300, 1500, 1800, 260],
      weeklyX: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      depositSubject: [
        {
          lab: "人民币",
          value: "CNY",
        },
        {
          lab: "美元",
          value: "USD",
        },
      ],
      defaultValue: "人民币",
      currentNum: 0, //默认选中
      currentValue: "CNY",
    };
  },
  watch: {
    defaultValue(val) {
      // console.log("val", val);
      if (val === "人民币") {
        this.weeklyData = [1500, 1400, 1200, 1300, 1500, 1800, 260];
      } else if (val === "美元") {
        this.weeklyData = [900, 1000, 1200, 1300, 1400, 1300, 800];
      }
    },
  },
  methods: {
    // 下拉菜单
    changeSelect(item, idx) {
      this.defaultValue = item.lab; //后
      this.currentNum = idx;
      this.currentValue = item.value;
    },
    //隐藏 loader
    hideLoading() {
      console.log("点击 需要隐藏什么");
    },
  },
};
</script>
<style  lang="scss" scoped>
.echarts_wrap {
  width: 100%;
  height: 100%;
  display: flex;
}
.left_chart,
.right_chart {
  width: 50%;
  height: 100%;
}
.right_chart {
  .right_chart_top {
		display: flex;
		height: 50%;
    > div {
      width: 50%;
      height: 100%;
    }
    .right_chart_top_line {
      position: relative;
      .select {
        position: absolute;
        top: 10px;
        left: 50px;
      }
    }
  }
	.bubble_charts{
		height: 50%;
		width: 100%;
	}
}
</style>
