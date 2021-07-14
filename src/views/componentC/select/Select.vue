<!-- 下拉菜单组件 -->
<template>
  <div class="x_select" ref="x_select" v-clickoutside="clickoutside">
    <div class="select_wrap" @click="selectClick">
      <div class="current_value defaultC" v-if="defaultValue == '请选择单位'">
        {{ defaultValue }}
      </div>
      <div class="current_value activeC" v-else>
        {{ defaultValue }}
      </div>
      <div ref="triangle" class="triangle triangle_up"></div>
    </div>

    <div class="option_wrapper" ref="optionwrapper" style="display: none">
      <ul ref="optionul">
        <li
          v-for="(item, idx) in subject"
          :key="item.id"
          ref="optionitem"
          @click="itemClick(item, idx)"
          @mouseover="move($event, idx)"
          @mouseout="out($event)"
          :class="idx == currentNum ? 'active' : ''"
        >
          {{ item.lab }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Clickoutside from "@/utils/clickoutside";
export default {
  name: "Select",
  components: {},
  directives: {
    //挂载指令
    Clickoutside,
  },
  props: {
    // 下拉菜单的数据
    subject: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultValue: {
      type: String,
      default: "请选择",
    },
    selectWidth: {
      default: 160,
    },
    selectHeight: {
      default: 24,
    },
    userType: {
      default: "",
    },
    currentNum: {
      default: 0,
    },
  },
  data() {
    return {
      // currentNum: 0,
    };
  },
  watch: {},
  computed: {
    optionWrapper() {
      //选项的节点
      return this.$refs.optionwrapper;
    },
    triangle() {
      //三角的节点
      return this.$refs.triangle;
    },
    subjectList() {
      //选项的 item
      return this.$refs.optionitem;
    },
  },
  mounted() {
    this.$refs.x_select.style.width = this.selectWidth + "px";
    this.$refs.x_select.style.height = this.selectHeight + "px";
    this.$refs.x_select.style.lineHeight = this.selectHeight + "px";
    this.$refs.optionwrapper.style.width = this.selectWidth + "px";
    this.$refs.optionwrapper.style.transition = 2 + "s";
  },
  methods: {
    isShow() {
      if (this.optionWrapper.style.display === "none") {
        this.optionWrapper.style.display = "block";
        this.$refs.triangle.classList.add("triangle_down");
        this.$refs.triangle.classList.remove("triangle_up");
      } else if (this.optionWrapper.style.display === "block") {
        this.optionWrapper.style.display = "none";
        this.$refs.triangle.classList.add("triangle_up");
        this.$refs.triangle.classList.remove("triangle_down");
      }
    },
    // 点击了 头部的下拉菜单
    selectClick() {
      this.isShow();
      this.$emit("hideLoading");
    },
    itemClick(item, idx) {
      this.isShow();
      this.$emit("changeSelect", item, idx);
    },
    move(event) {
      for (let item of this.subjectList) {
        item.classList.remove("hover");
      }
      // this.currentNum = idx;
      event.currentTarget.classList.add("hover");
    },
    out(event) {
      event.currentTarget.classList.remove("hover");
    },
    //点击外层的时候 触发的事件
    clickoutside() {
      if (this.optionWrapper.style.display === "block") {
        this.optionWrapper.style.display = "none";
        this.$refs.triangle.classList.add("triangle_up");
        this.$refs.triangle.classList.remove("triangle_down");
      }
    },
  },
};
</script>
<style  lang="scss" scoped>
ul,
li {
  list-style: none;
}
.x_select {
  position: relative;
  font-size: 14px;
  // z-index: 2000;
  z-index: 1993;

  .select_wrap {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #141a21;
    background: #fff;
    z-index: 1993;
  }
  // 三角形
  .triangle {
    position: absolute;
    top: 30.5%;
    right: 5.5%;
    transition: 0.3s;
  }
  .triangle_up {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid red;
  }
  .triangle_down {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid red;
  }
  .active {
    color: #e82323;
    // background: #f5f7fa !important;
    background: #ffe !important;
  }
  .hover {
    color: #e82323;
    // background: #f5f7fa !important;
    background: #ffe !important;
  }
  .current_value {
    padding-left: 5px;
  }
  .defaultC {
    color: #b9bcc5;
  }
  .activeC {
    color: #000;
  }
  .option_wrapper {
    position: absolute;
    z-index: 3;
    left: 0px;
    top: 40px;
    // background: #fff;
    background: #f5f7fa;
    ul {
      li {
        padding-left: 5px;
        height: 26px;
        line-height: 26px;
        margin-bottom: 2px;
        transition: 0.3s;
        background: #f5f7fa;
      }
    }
  }
}
</style>