<template>
  <el-container class="home-page">
    <el-menu
      background-color="#031529"
      text-color="#fff"
      :collapse="isCollapse"
      mode="vertical"
      :unique-opened="true"
      :default-active="'/lottery/list'"
      :router="true"
      :collapse-transition="true"
    >
      <div class="info txt-hide">
        <span>欢迎...</span>
      </div>
      <template v-for="(item, i) of routes" :key="item.name">
        <el-submenu v-if="item.children" :index="item.path">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(child, idx) of item.children"
              :key="i + '-' + idx"
              :index="child.path"
              >{{ child.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item v-else :index="item.path">
          <i :class="item.icon"></i>
          <template #title
            ><span>{{ item.name }}</span></template
          >
        </el-menu-item>
      </template>
    </el-menu>

    <el-container>
      <el-main>
        <header class="both-sides-center">
          <i
            @click="onIcon"
            :class="[!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
            style="margin-right: 15px"
          ></i>
          <el-button @click="loginout">退出</el-button>
        </header>
        <div class="main">
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
          </el-breadcrumb> -->
          <router-view name="content"></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  private isCollapse = false;
  private routes = [
    // 子路由，子页面使用router-view
    {
      path: "/lottery",
      name: "房产管理",
      icon: "el-icon-office-building",
      children: [
        {
          path: "/lottery/list",
          name: "房产列表",
        },
      ],
    },
    {
      path: "/ad",
      name: "广告管理",
      icon: "el-icon-data-board",
      children: [
        {
          path: "/ad/list",
          name: "广告列表",
        },
      ],
    },
    {
      path: "/member",
      name: "会员管理",
      icon: "el-icon-user",
      children: [
        {
          path: "/member/list",
          name: "会员列表",
        },
      ],
    },
    {
      path: "/power",
      name: "账号权限",
      icon: "el-icon-lock",
      children: [
        {
          path: "/power/info",
          name: "个人信息",
        },
        {
          path: "/power/roles",
          name: "角色管理",
        },
      ],
    },
  ];

  async created() {
    if (!this.$utils.getCookie("token")) {
      this.$router.push({ path: "/login" });
    }
  }

  private onIcon() {
    this.isCollapse = !this.isCollapse;
  }

  /**
   * @todo 退出登录
   */
  private loginout() {
    this.$api.loginout();
    this.$utils.delCookie("token");
    this.$router.push({ path: "/login" });
  }
}
</script>


<style scoped lang='less'>
@import "./index.less";
</style>