<template>
  <div class="water_wrap">
    <div class="water_wrap_left">
      <dv-water-level-pond
        :config="config"
        style="width: 150px; height: 180px"
      />
    </div>
    <div class="water_wrap_right">
      <dv-water-level-pond
        :config="config2"
        style="width: 150px; height: 180px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "WaterCharts",
  components: {},
  data() {
    return {
      config: {
        data: [55],
        shape: "round",
      },
      config2: {
        data: [66, 45],
        shape: "roundRect",
      },
    };
  },
  methods: {},
};
</script>
<style  lang="scss" scoped>
.water_wrap{
  display: flex;
  margin-top: 20px;
	width: 100%;
	height: 100%;
  .water_wrap_right{
    margin-left: 20px;
  }
}
</style>
