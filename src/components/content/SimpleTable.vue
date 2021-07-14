<template>
  <!-- 关于简单table展示的table封装 -->
  <div class="tableCom">
    <el-table
      stripe
      border
      :data="tableData1"
      style="width: 100%"
      :header-cell-style="{
        background: '#e82323!important',
        color: '#fff',
        textAlign: 'center',
      }"
      :row-class-name="tableRowClassName"
      :cell-style="{ padding: '5px 0 5px 0' }"
    >
      <template v-for="(item, idx) in tableConfig1">
        <el-table-column
          v-if="item.type"
          :key="idx"
          :type="item.type"
          :label="item.label ? item.label : ''"
          :width="item.width ? item.width : ''"
          :align="item.align ? item.align : ''"
        >
        </el-table-column>
        <el-table-column
          v-else
          :key="idx"
          :prop="item.prop ? item.prop : ''"
          :label="item.label ? item.label : ''"
          :width="item.width ? item.width : ''"
          :align="item.align ? item.align : ''"
        >
          <template slot-scope="scope">
            <div v-if="item.moneyFlag">
              {{ MoneyFormat(scope.row[item.prop]) }}
            </div>
            <div v-else>{{ scope.row[item.prop] }}</div>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import { money_format } from "@/utils/tools.js";
export default {
  name: "SimpleTable",
  components: {},
  props: {
    tableConfig: {
      type: Array,
      default() {
        return [];
      },
    },
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      tableConfig1: this.tableConfig,
      tableData1: this.tableData,
    };
  },
  watch:{
    tableData(val){
      this.tableData1 = val;
    }
  },
  created() {
  },
  methods: {
    // 金额千分位化
    MoneyFormat(val) {
      return money_format(val);
    },
    //给行设置一个固定的className,利用该className给行加样式
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "row_color";
      } else {
        return "row_color_none";
      }
    },
  },
};
</script>
<style  lang="scss" scoped>
// 单行颜色
::v-deep .row_color {
  background: #f0f4ff !important;
}
// 双行颜色
::v-deep .row_color_none {
  background: #ffffff !important;
}
</style>