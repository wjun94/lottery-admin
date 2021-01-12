<template>
  <el-form
    ref="selectForm"
    :inline="true"
    :model="formInline"
    class="demo-form-inline"
  >
    <el-form-item label="项目名称">
      <el-input
        v-model="formInline.name"
        placeholder="请输入项目名称"
      ></el-input>
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="formInline.status" placeholder="请选择状态">
        <el-option
          v-for="(item, i) of statusArr"
          :label="item"
          :value="i === 0 ? '' : item"
          :key="item"
        ></el-option>
        <!-- <el-option label="已摇号" value="已摇号"></el-option> -->
        <!-- <el-option label="不需要摇号" value="不需要摇号"></el-option> -->
      </el-select>
    </el-form-item>
    <el-form-item label="创建时间">
      <el-date-picker
        v-model="formInline.date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    date: Array,
  },
  data() {
    return {
      statusArr: ["全部", "即将摇号", "已摇号", "不需要摇号"],
      formInline: {
        name: "",
        status: "",
        date: this.date,
      },
    };
  },
  watch: {
    date(newV) {
      this.formInline.date = newV;
    },
  },
  methods: {
    onSubmit() {
      const refs = this.$refs;
      refs["selectForm"].validate(async (valid) => {
        if (valid) {
          console.log(this.formInline);
          const { date, name, status } = this.formInline;
          const [starAt, endAt] = date;
          this.$emit("on-node-click", {
            starAt,
            endAt,
            name,
            status,
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang='less'>
@import "./index.less";
</style>