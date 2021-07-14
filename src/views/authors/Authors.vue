<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-redpacket_fill"></i> 支持作者
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="container_left">
        <div class="plugins-tips">
          如果该框架对你有帮助，那么可以请苦逼搬砖者和奶茶不？。
        </div>
        <div>
          <img src="./img/weixin.png" />
        </div>
      </div>
			<div class="container_left">
				<div>
					博客链接1：<a href="https://blog.csdn.net/weixin_47409897/article/list/1" target="_blank">不求人0</a>
				</div>
				<div>
					博客链接2：<a href="https://blog.csdn.net/weixin_42681295" target="_blank">牛先森家的牛奶</a>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authors",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  lang="scss" scoped>
.container {
  display: flex;
  .container_left {
    width: 40%;
    height: 40%;
  }
}
</style>
