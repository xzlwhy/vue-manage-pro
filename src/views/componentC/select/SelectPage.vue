<template>
  <div>
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
    <div>
      {{ defaultValue}}
    </div>
  </div>
</template>

<script>
import XSelect from "./Select";
export default {
  name: "SelectPage",
  components: {
    XSelect,
  },
  data() {
    return {
      // 下拉菜单
      depositSubject: [
        {
          lab: "人民币",
          value: "CNY",
        },
        {
          lab: "美元",
          value: "USD",
        },
        {
          lab: "港币",
          value: "HKD",
        },
      ],
      defaultValue: "人民币",
      currentNum: 0, //默认选中
      currentValue: "CNY",
    };
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
      console.log('点击 需要隐藏什么');
    },
  },
};
</script>
<style  lang="scss" scoped>
</style>