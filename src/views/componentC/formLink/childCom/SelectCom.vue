<!-- 下拉菜单 -->
<template>
  <div class="xSelect_container">
    {{ value }}
    <span
      :style="labelWType == 1 ? 'width:94px' : 'width:112px'"
      class="xSelect_label"
      ><span class="xSelect_check" v-show="isCheck"></span>
      <span class="xSelect_title">{{ defaultConfig.title }}</span>
    </span>
    <el-select
      :clearable="isClearable"
      :disabled="isDisabled"
      class="xSelect_wrap"
      :style="
        labelWType == 1
          ? 'width: calc(100% - 94px)'
          : 'width: calc(100% - 112px)'
      "
      style="height: '32px'"
      v-model="value"
      :placeholder="defaultConfig.placeholder"
      @change="selectChange"
      @clear="selectClear"
    >
      <el-option
        v-for="item in defaultConfig.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "SelectCom",
  components: {},
  props: {
    //给 label 设置宽度 默认94 类型2 为110
    labelWType: {
      type: Number,
      default: 1,
    },
    defaultConfig: {
      type: Object,
      default: () => {},
    },
    isCheck: {
      type: Boolean,
      default() {
        return false;
      },
    },
    // 是否禁用
    isDisabled: {
      type: Boolean,
      default: false,
    },
    // 是否清空
    isClearable: {
      type: Boolean,
      default: true,
    },
    //当前 组件的title
    titleType: {
      type: String,
      title: "",
    },
    commomClear: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: "",
    };
  },

  watch: {
    commomClear(val) {
      if (val && this.titleType == "clearComponentCBType") {
        this.value = "";
        this.$store.commit("clearComponentCBType", false);
      }
      if (val && this.titleType == "clearComponentCBSonType") {
        this.value = "";
        this.$store.commit("clearComponentCBSonType", false);
      }
    },
  },

  created() {},
  methods: {
    //下拉菜单选中的值 发生改变
    selectChange() {
      // console.log('下拉菜单',this.value);
      this.$emit("selectChange", this.value);
    },
    //下拉菜单 点击清空
    selectClear() {
      this.$emit("selectClear");
    },
  },
};
</script>
<style  lang="scss" scoped>
// input的宽高
::v-deep .el-input__inner {
  height: 32px !important;
}
::v-deep .el-input__icon {
  line-height: 32px !important;
}
.xSelect_container {
  .xSelect_label {
    position: relative;
    float: left;
    height: 30px;
    line-height: 30px;
    .xSelect_check {
      position: absolute;
      left: 5px;
      top: 5px;
      width: 6px;
      height: 6px;
    }
    .xSelect_title {
      text-align: right;
      display: inline-block;
    }
  }

  .xSelect_wrap {
    float: left;
  }
}
</style>