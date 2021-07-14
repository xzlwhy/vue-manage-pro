<template>
  <div class="page">
    <!-- {{ defaultPage }} -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.defaultPage.currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="this.defaultPage.currentPageSize"
      layout="total, prev, pager, next, sizes"
      :total="this.defaultPage.total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  components: {},
  props: {
    defaultPage: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
  },
};
</script>
<style  lang="scss" scoped>
.page {
  margin-top: 10px;
  position: relative;
  width: 100%;
  height: 26px;
  ::v-deep .el-pagination{
    position: absolute;
    right: 20px;
  }
}
</style>