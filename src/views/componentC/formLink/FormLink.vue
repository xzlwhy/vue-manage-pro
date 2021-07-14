<template>
  <div>
    <div class="item">
      <SelectCom
        :defaultConfig="businessType"
        @selectChange="bTypeChange"
        titleType="clearComponentCBType"
        :commomClear="clearComponentCBType"
        @selectClear="bTypeClear"
      />
      <SelectCom
        :defaultConfig="businessSonType"
        @selectChange="bSonTypeChange"
        titleType="clearComponentCBSonType"
        :commomClear="clearComponentCBSonType"
        @selectClear="bSonTypeClear"
      />
      <SelectCom :defaultConfig="test" @selectChange="testChange" />
      <el-button @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script>
import SelectCom from "./childCom/SelectCom";
import {
  CLEAR_COMPONENT_C_TYPT,
  CLEAR_COMPONENT_C_B_TYPT,
} from "@/store/mutation-type.js"; // 引入 变量类型
export default {
  name: "FormLink",
  components: {
    SelectCom,
  },
  data() {
    return {
      businessType: {
        title: "业务品种: ",
        options: [
          {
            value: "131",
            label: "流动",
          },
          {
            value: "132",
            label: "止水",
          },
        ],
      },
      businessSonType: {
        title: "业务子品种: ",
        options: [
          {
            value: "131001",
            label: "流动1",
          },
          {
            value: "131002",
            label: "流动2",
          },
          {
            value: "132001",
            label: "止水1",
          },
          {
            value: "132002",
            label: "止水2",
          },
        ],
      },
      bSonTypeOptions0: [
        {
          value: "131001",
          label: "流动1",
        },
        {
          value: "131002",
          label: "流动2",
        },
        {
          value: "132001",
          label: "止水1",
        },
        {
          value: "132002",
          label: "止水2",
        },
      ],
      bSonTypeOptions: [
        {
          value: "131001",
          label: "流动1",
        },
        {
          value: "131002",
          label: "流动2",
        },
      ],
      bSonTypeOptions2: [
        {
          value: "132001",
          label: "止水1",
        },
        {
          value: "132002",
          label: "止水2",
        },
      ],
      test: {
        title: "测试: ",
        options: [
          {
            value: "110",
            label: "测试1",
          },
          {
            value: "111",
            label: "测试2",
          },
        ],
      },
    };
  },
  computed: {
    clearComponentCBType() {
      return this.$store.state.componentC.clearComponentCBType;
    },
    clearComponentCBSonType() {
      return this.$store.state.componentC.clearComponentCBSonType;
    },
  },
  methods: {
    // 父业务
    bTypeChange(val) {
      this.$store.commit(CLEAR_COMPONENT_C_B_TYPT, true);
      this.businessSonType.options = this.bSonTypeOptions0;
      if (val === "131") {
        this.businessSonType.options = this.bSonTypeOptions;
      } else if (val === "132") {
        this.businessSonType.options = this.bSonTypeOptions2;
      }
    },
    bTypeClear() {
      this.$store.commit(CLEAR_COMPONENT_C_TYPT, true);
      this.$store.commit(CLEAR_COMPONENT_C_B_TYPT, true);
      this.businessSonType.options = this.bSonTypeOptions0;
    },
    // 子业务
    bSonTypeChange(val) {
      console.log("bSon", val);
    },
    bSonTypeClear() {
      this.$store.commit(CLEAR_COMPONENT_C_B_TYPT, true);
    },
    testChange(val) {
      console.log("测试", val);
    },
    reset() {
      this.$store.commit(CLEAR_COMPONENT_C_TYPT, true);
      this.$store.commit(CLEAR_COMPONENT_C_B_TYPT, true);
      this.businessSonType.options = this.bSonTypeOptions0;
    },
  },
};
</script>
<style  lang="scss" scoped>
.item {
  width: 25%;
}
</style>