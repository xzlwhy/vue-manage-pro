<template>
  <div class="xpl_container search">
    <div class="xpl_container_header clear_fix">
      <div class="xpl_container_header_item">
        <span>币种：</span>
        <el-select v-model="currencyVal" placeholder="请选择">
          <el-option
            v-for="item in currency"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="xpl_container_header_item">
        <span>是否记录：</span>
        <el-select v-model="signVal" placeholder="请选择">
          <el-option
            v-for="item in sign"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="xpl_container_btn">
        <el-button type="primary" @click="query">查询</el-button
        ><el-button @click="reset">重置</el-button>
      </div>
    </div>

    <div class="xpl_container_table">
      <SimpleTable :tableConfig="tableConfig" :tableData="tableData" />
      <Pagination
        :defaultPage="defaultPage"
        @handleCurrentChange="handleCurrentChange"
        @handleSizeChange="handleSizeChange"
      />
    </div>
  </div>
</template>

<script>
import SimpleTable from "@/components/content/SimpleTable.vue";
import Pagination from "@/components/content/Pagination.vue";
import { tableData, noSign, signData, CNYData, USDData } from "./search";
export default {
  name: "Search",
  components: {
    SimpleTable,
    Pagination,
  },
  data() {
    return {
      currency: [
        {
          value: "0",
          label: "人民币",
        },
        {
          value: "1",
          label: "美元",
        },
      ],
      sign: [
        {
          value: "0",
          label: "已标记",
        },
        {
          value: "1",
          label: "未标记",
        },
      ],
      tableConfig: [
        {
          type: "index",
          label: "序号",
          width: "50",
        },
        {
          prop: "date",
          label: "日期",
          width: "200",
          align: "left",
        },
        {
          prop: "currency",
          label: "币种",
          width: "100",
          align: "left",
        },
        {
          prop: "sign",
          label: "是否标记",
          width: "100",
          align: "left",
        },
        {
          prop: "name",
          label: "姓名",
          width: "200",
          align: "left",
        },
        {
          prop: "address",
          label: "地址",
          width: "250",
          align: "left",
        },
        {
          prop: "money",
          label: "金钱",
          width: "200",
          align: "right",
          moneyFlag: true,
        },
        {
          prop: "date2",
          label: "日期2",
        },
      ],
      tableData: [],
      // tableData: [
      //   {
      //     date: "20160502",
      //     name: "王小虎",
      //     currency: "人民币",
      //     sign: "否",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     money: 2300,
      //     timeFlag: true,
      //     date2: "20160304",
      //   },
      //   {
      //     date: "20160504",
      //     name: "王小虎",
      //     sign: "是",
      //     currency: "人民币",
      //     address: "上海市普陀区金沙江路 1517 弄",
      //     money: 23008,
      //     date2: "20160304",
      //   },
      //   {
      //     date: "20160501",
      //     name: "王小虎",
      //     currency: "美元",
      //     sign: "是",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //     money: 99987,
      //     date2: "20160304",
      //   },
      //   {
      //     date: "20160503",
      //     name: "王小虎",
      //     sign: "否",
      //     currency: "美元",
      //     address: "上海市普陀区金沙江路 1516 弄",
      //     money: 23850,
      //     date2: "20160304",
      //   },
      // ],
      defaultPage: {
        currentPage: 1,
        currentPageSize: 10,
        total: 20,
      },
      // 查询的值
      currencyVal: "",
      signVal: "",
    };
  },
  watch: {
    tableData(val) {
      this.tableData = val;
    },
  },
  created() {
    // console.log("searchData", tableData, noSign, signData, CNYData, USDData);
  },
  methods: {
    // getTable(option1) {
    //   let option = Object.assign(option1, {
    //     currentPage: this.defaultPage.currentPage,
    //     currentPageSize: this.defaultPage.currentPageSize,
    //   });
    //   getTableData(option).then(res => {
    //     console.log('res',res);
    //   })
    // },
    // 查询
    query() {
      // console.log("币种", this.currencyVal, "标记", this.signVal);
      if (this.currencyVal || this.signVal) {
        // 带查询条件的
        if (this.currencyVal == "0") {
          this.tableData = CNYData;
        } else if (this.currencyVal == "1") {
          this.tableData = USDData;
        } else if (this.signVal == "0") {
          this.tableData = signData;
        } else if (this.signVal == "1") {
          this.tableData = noSign;
        }
        if ( this.currencyVal && this.signVal ) {
          this.tableData = tableData;
        }
      } else {
        // 不带查询条件的
        this.tableData = tableData;
      }
    },
    // 重置
    reset() {
      this.currencyVal = "";
      this.signVal = "";
      this.tableData = []
    },
    // 当前页
    handleCurrentChange(val) {
      // console.log("当前页", val);
      this.defaultPage.currentPage = val;
    },
    handleSizeChange(val) {
      // console.log("条数", val);
      this.defaultPage.currentPageSize = val;
    },
  },
};
</script>
<style  lang="scss" scoped>
@import "@/assets/css/pageCom.scss";
.search {
  background: #fff;
}
.xpl_container_header {
  position: relative;
  padding: 15px 10px;
  height: 9.375rem;
  width: 100%;
  background: #ccc;
  .xpl_container_header_item {
    float: left;
    width: 25%;
    height: 32px;
    span {
      color: #fff;
    }
  }
  .xpl_container_btn {
    position: absolute;
    right: 30px;
    top: 50px;
  }
}

// .xpl_container_table {
// }
</style>