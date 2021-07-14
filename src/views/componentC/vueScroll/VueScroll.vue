<template>
  <div class="wrapper">
    <div class="content">
      <div class="title">
        <div class="title_header">
          <div v-for="item in title" class="title_header_item" :key="item">
            {{ item }}
          </div>
        </div>
        <div class="title_con">
          <vueSeamless
            :data="data"
            :class-option="classOption"
            class="seamless-warp2"
            @ScrollEnd="onScrollEnd"
          >
            <div
              class="title_con_item clear_fix"
              :class="idx % 2 === 1 ? 'odd' : 'even'"
              v-for="(item, idx) in data"
							:key="idx"
            >
              <span>{{ item[0] }}</span>
              <span>{{ item[1] }}</span>
              <span>{{ item[2]}}</span>
              <span>{{ item[3] }}</span>
            </div>
          </vueSeamless>
        </div>
      </div>
    </div>
    <div class="mock" v-if="isLoding">
      <!-- <Loadingtab /> -->
    </div>
  </div>
</template>

<script>
import vueSeamless from "vue-seamless-scroll";
// import Loadingtab from "@/components/commom/Loadingtab";
export default {
  components: {
    vueSeamless,
    // Loadingtab,
  },
  data() {
    return {
      title: ["团队", "余额(亿)", "预算达成率", "单月活跃小B"],
      data: [
        // ["团队", "余额(亿)", "预算达成率", "单月活跃小B"],
        ["湖南分部", "4.01", "170.7%", "1"],
        ["广东分部", "24.38", "138.9%", "39"],
        ["西北分部", "5.91", "114.52%", "41"],
        ["微贷团队", "0.10", "104.11%", "21"],
        ["华东分部", "2.85", "93.34%", "6"],
        ["深圳分部", "6.40", "84.08%", "7"],
        ["湖北分部", "1.69", "56.28%", "6"],
        ["西南分部", "0.19", "27.54%", "0"],
        ["华北分部", "0.25", "14.44%", "0"],
      ],
      isLoding: false,
    };
  },
  created() {
    this.onScrollEnd();
  },
  computed: {
    classOption() {
      return {
        step: 0.4,
      };
    },
  },
  methods: {
    onScrollEnd() {
      // this.$api.screenApi.teamRanking().then((res) => {
      //   // console.log("团队", res);
      //   if ( res.code == 200 ) {
      //     this.isLoding = false;
      //     this.data = res.data.rankArr.slice(1);
      //   }
      // });
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 300px;
  height: 150px;
  background-image: url("./img/rightbg.png");
  background-size: 100% 100%;
  font-family: "newfont";
  position: relative;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .border {
      display: flex;
      justify-content: flex-end;
      padding-top: 0.8px;
      > span {
        color: #aad3ff;
        font-weight: bold;
        font-size: 4px;
        height: 8px;
        width: 50px;
        text-align: right;
        line-height: 7px;
        display: inline-block;
        margin-right: 4px;
      }
    }
  }

  ::v-deep .mock {
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
    background: rgba(0, 41, 90, 0.6);
    .loading-tip {
      color: #fff;
      font-size: 4px;
    }
  }
}

</style>
