<template>
  <el-row>
    <div>
      <el-button type="primary" @click="getAllTable()">获取所有表格</el-button>
    </div>
    <div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div>
      <el-button type="primary">主要按钮</el-button>
    </div>
    <div style="width: 500px">
      <span style="font-size: 15px">项目名称为：</span>
      <el-input v-model="input" placeholder="请输入项目名称"></el-input>
    </div>
    <div>
      <span style="font-size: 15px">是否使用 创建基础文件：</span>
      <el-checkbox v-model="checked"></el-checkbox>
    </div>
    <div>
      <el-button type="success">成功按钮</el-button>
    </div>
  </el-row>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      input: ''
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },

    getAllTable() {
      this.$store.dispatch("showTable", {}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
