<template>
  <el-container class="outer" id="app">
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane label="项目生成">
          <el-row>
            <el-col :span="1.5">
              <div>
                请输入项目名称：
              </div>
            </el-col>
            <el-col :span="3">
              <div>
                <el-input class="bg-purple" v-model="projectName"></el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <el-switch
                    v-model="createBasics"
                    active-text="创建基础文件"
                    inactive-text="不创建基础文件">
                </el-switch>
              </div>
            </el-col>
          </el-row>
          <el-steps :space="200" :active="active" finish-status="success">
            <el-step title="开始"></el-step>
            <el-step title="获取表格"></el-step>
            <el-step title="获取表格详情"></el-step>
            <el-step title="创建文件完成"></el-step>
          </el-steps>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
          <el-collapse v-model="activeProject" accordion>
            <el-collapse-item title="表信息" name="1">
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
              </el-checkbox>
              <el-checkbox-group v-model="checkedTableNames" @change="handleCheckedTableNamesChange">
                <el-row>
                  <el-col :span="6" v-for="(t,k) in tableNames" :key="k">
                    <div>
                      <el-checkbox :label="t.code">{{ t.tableName }}</el-checkbox>
                    </div>
                  </el-col>
                </el-row>
              </el-checkbox-group>

            </el-collapse-item>
            <el-collapse-item title="字段信息" name="2">
              <div v-for="(table,k) in tableInfos" :key="k">
                <el-row>
                  <el-col :span="24">
                    <div class="grid-content-light ac">表名: {{ table.tableNameTrans }}</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="4">
                    <div class="grid-content ac">列名</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac">类型</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac">描述</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac">是否范围查询</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac">是否等于查询</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac"></div>
                  </el-col>
                </el-row>

                <el-row v-for="(column,l) in table.columns" :key="l">
                  <el-col :span="4">
                    <div class="grid-content ac">
                      <el-input class="bg-purple" v-model="column.columnNameTrans"></el-input>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac">
                      <el-input v-model="column.typeNameTrans"></el-input>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac">{{ column.remarks }}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac">
                      <el-checkbox v-model="column.columnRangeSearch">range</el-checkbox>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac">
                      <el-checkbox v-model="column.columnEqualSearch">equal</el-checkbox>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content ac"></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div class="grid-min-content-white "></div>
                  </el-col>
                </el-row>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="Yml变量提取">
          <el-collapse v-model="activeYml">
            <el-collapse-item title="yml配置" name="1">
              <el-input
                  type="textarea"
                  :rows="10"
                  placeholder="请输入内容"
                  v-model="ymlOriginal">
              </el-input>
            </el-collapse-item>
            <el-collapse-item title="转换后的Yml配置" name="2">
              <el-input
                  type="textarea"
                  :rows="10"
                  placeholder="请输入内容"
                  v-model="ymlTransform">
              </el-input>
            </el-collapse-item>
            <el-collapse-item title="提取的环境变量" name="3">
              <el-input
                  type="textarea"
                  :rows="10"
                  placeholder="请输入内容"
                  v-model="environmentVariable">
              </el-input>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="Word文件格式化"></el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>

</template>

<script>
export default {
  data() {
    return {
      active: 0,
      activeProject: '1',
      activeYml: ['1'],
      checkAll: false,
      checked: false,
      ymlOriginal: '',
      ymlTransform: '',
      environmentVariable: '',
      tableNameOptions: [],
      checkedTableNames: [],
      tableNames: [],
      isIndeterminate: true,
      tableInfos: [],
      input: '',
      projectName: '',
      createBasics: false
    };
  },
  methods: {
    next() {
      if (this.active === 0) {
        this.getAllTable();
      }
      if (this.active === 1) {
        this.getSelectTable();
      }
      if (this.active === 2) {
        this.createTableTrans();
      }
      if (this.active > 3) this.active = 0;
    },
    handleCheckAllChange(val) {
      this.checkedTableNames = val ? this.tableNameOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedTableNamesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.tableNames.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.tableNames.length;
    },
    getAllTable() {
      if (this.projectName === undefined || this.projectName === '') {
        this.$notify.error({
          title: '错误',
          message: '请填写项目名称！！'
        });
        return;
      }
      this.$store.dispatch("showTable", {}).then(res => {
        const list = res.list;
        const dd = [];
        list.forEach(function (item) {
          dd.push(item.code);
        });
        this.tableNameOptions = dd;
        this.tableNames = list || [];
        this.active++;
      });
    },
    getSelectTable() {
      if (this.checkedTableNames === undefined || this.checkedTableNames.length === 0) {
        this.$notify.error({
          title: '错误',
          message: '请勾选需要生成的表！！'
        });
        return;
      }
      let param = new FormData();
      param.append('tableCodes', this.checkedTableNames.join(","));
      this.$store.dispatch("showColumn", {param}).then(res => {
        const list = res.list;
        this.tableInfos = list || [];
        this.active++;

      })
    },
    createTableTrans() {
      let params = {
        "projectName": this.projectName,
        "createBasics": this.createBasics,
        "tableTrans": this.tableInfos
      };
      this.$store.dispatch("getTableTrans", params).then(res => {
        if (res.meta.success) {
          this.active++;
          this.$notify({
            title: '成功',
            message: '生成成功了',
            type: 'success'
          });
        }
      })
    }
  }
}
</script>

<style>
@import "./assets/css/regist.less";
</style>
