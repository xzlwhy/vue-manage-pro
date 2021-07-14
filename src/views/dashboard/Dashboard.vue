<template>
  <dv-border-box-11 title="dv-border-box-11">
    <div class="home_wrap">
      <div class="home_wrap_top">
        <div class="homeTop_left"><WaterCharts /></div>
        <div class="homeTop_left"><ConeCharts /></div>
        <div class="homeTop_left">
					<TableCharts />
				</div>
      </div>
      <div class="home_wrap_bottom">
        <div class="homeBottom_left">
					<PieCharts />
					</div>
        <div class="homeBottom_left"><ColumnCharts /></div>
      </div>
    </div>
  </dv-border-box-11>
  <!-- <dv-loading>Loading...</dv-loading> -->
</template>

<script>
import WaterCharts from "./childCom/WaterCharts";
import ConeCharts from "./childCom/ConeCharts";
import TableCharts from "./childCom/TableCharts";
import PieCharts from "./childCom/PieCharts";
import ColumnCharts from "./childCom/ColumnCharts";
// getLoanTerm
import { PlatformData ,  } from "@/api/home/home.js";
export default {
  name: "Dashboard",
  components: {
    WaterCharts,
    ConeCharts,
    TableCharts,
    PieCharts,
    ColumnCharts,
  },
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // 请求
      // getLoanTerm({ isdate: 1, tedate: 2 }).then((res) => {
      //   console.log("res", res);
      // });
			// 请求
			PlatformData().then(res =>{
				console.log('res', res);
			})
    },
  },
};
</script>
<style  lang="scss" scoped>
.home_wrap {
  position: relative;
  top: 50px;
  left: 15px;
  width: 98%;
  height: 92%;
  border-radius: 30px;
  .home_wrap_top {
    height: 50%;
    width: 100%;
    border-radius: 5px;
    display: flex;
    .homeTop_left {
      width: 33%;
      height: 99%;
      // background: #002a5b;
      border: 1px solid #000;
      margin-left: 3px;
    }
  }
  .home_wrap_bottom {
    height: 50%;
    width: 100%;
    border-radius: 5px;
    display: flex;
    .homeBottom_left {
      width: 49%;
      height: 90%;
      background: #002a5b;
      border: 1px solid #000;
      margin-left: 3px;
    }
  }
}
</style>
