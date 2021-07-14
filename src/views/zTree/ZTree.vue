<template>
  <div>
    <div class="app-container">
      <ul id="treeDemo" class="ztree" />
    </div>
    <el-button @click="menuPowerComfirm">确定</el-button>
  </div>
</template>

<script>
export default {
  name: "ZTree",
  components: {},
  data() {
    return {
      setting: {
        // zTree 的配置
        data: {
          simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pid",
            rootPId: "",
          },
        },
        check: {
          enable: true,
        },
      },
    };
  },
  created() {
    this.$nextTick(() => {
      //拿到 后端的 数据 渲染在zTree之中 数据格式在后面
      let res = [
        {
          id: "1146",
          name: "角色",
          checked: true,
          disabled: false,
          pid: "1145",
        },
        {
          id: "1132",
          name: "用户",
          checked: true,
          disabled: false,
          pid: "1130",
        },
      ];
      $.fn.zTree.init($("#treeDemo"), this.setting, res);
    });
  },
  methods: {
    menuPowerComfirm() {
      const menuIds = this.getChooseIds("treeDemo");
      console.log('menuIds',menuIds);
    },
    getChooseIds(leftTree) {
      var treeObj = $.fn.zTree.getZTreeObj(`${leftTree}`);
      var nodes = treeObj.getCheckedNodes();
      var tmpNode;
      var ids = "";
      for (var i = 0; i < nodes.length; i++) {
        tmpNode = nodes[i];
        if (i != nodes.length - 1) {
          ids += tmpNode.id + ",";
        } else {
          ids += tmpNode.id;
        }
      }
      return ids;
    },
  },
};
</script>
<style  lang="scss" scoped>
</style>
