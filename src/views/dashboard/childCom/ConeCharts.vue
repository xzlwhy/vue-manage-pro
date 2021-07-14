<template>
  <div class="cone_charts">
    <dv-conical-column-chart
      :config="config"
      style="width: 100%; height: 100%"
    />
  </div>
</template>

<script>
export default {
  name: "ConeCharts",
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
            value: 71,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "信阳",
            value: 35,
          },
          {
            name: "漯河",
            value: 15,
          },
        ],
        img: [
          "http://datav.jiaminghi.com/img/conicalColumnChart/1st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/2st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/3st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/4st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/5st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/6st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/7st.png",
        ],
      },
    };
  },
  methods: {},
};
</script>
<style  lang="scss" scoped>
.cone_charts {
  position: relative;
  width: 100%;
  height: 100%;
  background: #282c34;
  ::v-deep .dv-conical-column-chart {
    position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
  }
}
</style>
