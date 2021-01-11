<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="项目名称">
      <el-input v-model="formInline.name" placeholder="项目名称"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          name: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>