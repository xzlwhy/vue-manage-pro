<template>
  <div>
    <SimpleTable :tableConfig="tableConfig" :tableData="tableData" />
    <SimpleTable :tableConfig="tableConfig2" :tableData="tableData2" />
    <Pagination
      :defaultPage="defaultPage"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    />
  </div>
</template>

<script>
import SimpleTable from "@/components/content/SimpleTable.vue";
import Pagination from "@/components/content/Pagination.vue";
import { time_format } from "@/utils/tools.js";
export default {
  name: "BaseTable",
  components: {
    SimpleTable,
    Pagination,
  },
  created() {
    // 处理时间
    this.tableData = this.tableData.map((item) => {
      item.date = time_format(item.date);
      item.date2 = time_format(item.date2);
      return item;
    });
  },
  data() {
    return {
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
      tableData: [
        {
          date: "20160502",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          money: 2300,
          timeFlag: true,
          date2: "20160304",
        },
        {
          date: "20160504",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          money: 23008,
          date2: "20160304",
        },
        {
          date: "20160501",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          money: 99987,
          date2: "20160304",
        },
        {
          date: "20160503",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          money: 23850,
          date2: "20160304",
        },
      ],
      tableConfig2: [
        {
          type: "index",
          label: "序号",
          width: "50",
        },
        {
          type: "selection",
          width: "50",
        },
        {
          prop: "date",
          label: "日期",
          width: "200",
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
          width: "250",
        },
        {
          prop: "gs",
          label: "公司",
          width: "250",
          align: "left",
        },
        {
          prop: "gs2",
          label: "公司2",
          width: "350",
          align: "right",
        },
      ],
      tableData2: [
        {
          date: "20160502",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          money: 2300,
          timeFlag: true,
          date2: "20160304",
          gs: "XXXXX公司",
          gs2: "XXXXX公司2",
        },
        {
          date: "20160504",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          money: 23008,
          date2: "20160304",
          gs: "XXXXX公司",
          gs2: "XXXXX公司2",
        },
        {
          date: "20160501",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          money: 99987,
          date2: "20160304",
          gs: "XXXXX公司",
          gs2: "XXXXX公司2",
        },
        {
          date: "20160503",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          money: 23850,
          date2: "20160304",
          gs: "XXXXX公司",
          gs2: "XXXXX公司2",
        },
        {
          date: "gs",
          name: "公司",
          address: "XXXX公司",
          money: 99987,
          date2: "20160304",
          gs: "XXXXX公司",
          gs2: "XXXXX公司2",
        },
        {
          date: "gs2",
          name: "公司2",
          address: "XXXX公司",
          money: 99987,
          date2: "20160304",
          gs: "XXXXX公司",
          gs2: "XXXXX公司2",
        },
      ],
      defaultPage: {
        currentPage: 1,
        currentPageSize: 10,
        total: 20,
      },
    };
  },
  methods: {
    // 当前页
    handleCurrentChange(val) {
      console.log("当前页", val);
    },
    handleSizeChange(val) {
      console.log("条数", val);
    },
  },
};
</script>
<style  lang="scss" scoped>
</style>