<template>
  <div class="lottery">
    <header class="border-btm page">
      <Select :date="date" @onNodeClick="onSelect" />
    </header>
    <main class="page">
      <div>
        <el-button class="add-btn" icon="el-icon-plus">新增</el-button>
      </div>
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="createAt" label="创建时间" />
        <el-table-column prop="lotAt" label="摇号时间" />
        <el-table-column prop="name" label="项目名称" />
        <el-table-column prop="src" label="网站" />
        <el-table-column prop="status" label="状态" width="180" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text"
              >查看</el-button
            >
            <el-button type="text">编辑</el-button>
            <el-button type="text">隐藏</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState, mapMutations } from "vuex";
import Select from "@/components/select/index.vue";

@Options({
  components: {
    Select,
  },
  computed: {
    ...mapState("lottery", ["list", "total", "pageSize", "date"]),
  },
  methods: {
    ...mapActions("lottery", ["getList", "setPageSize"]),
    ...mapMutations("lottery", ["setDate"]),
  },
})
export default class Home extends Vue {
  private selectedKeys: string[] = ["0"]; // 选中tab
  private collapsed = false; // 显示/隐藏左边tab
  private tabs: string[] = ["房产管理", "订单管理", "会员管理"];

  mounted() {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    this.setDate([start, end]);
    this.getList();
  }

  /**
   * @todo pageSize 改变时会触发
   * @param pageSize 页面内容个数
   **/
  handleSizeChange(pageSize: number) {
    this.getList({ pageSize });
  }

  /**
   * @todo currentPage 改变时会触发
   * @param current 当前页
   **/
  handleCurrentChange(current: number) {
    this.getList({ current });
  }

  onSelect(node: any) {
    this.setDate(node.date);
    this.getList(node);
  }
}
</script>

<style scoped lang='less'>
@import "./index.less";
</style>