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
          <el-button type="primary" icon="el-icon-s-tools" @click="ymlExtract">转换</el-button>
          <el-button type="primary" icon="el-icon-document-copy" @click="copyYmlTransform">转换后的Yml配置</el-button>
          <el-button type="primary" icon="el-icon-document-copy" @click="copyEnvironmentVariable">提取的环境变量</el-button>
          <el-collapse v-model="activeYml">
            <el-collapse-item title="yml配置" name="1">
              <el-upload
                  class="upload-demo"
                  drag
                  multiple
                  :before-upload="ymlAnalysis" action="">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传yml文件，且不超过500kb</div>
              </el-upload>
            </el-collapse-item>
            <el-collapse-item title="转换元素" name="2">
              <template>
                <el-transfer v-model="transferKey" :data="transferData"></el-transfer>
              </template>
            </el-collapse-item>
            <el-collapse-item title="转换后的Yml配置" name="3">
              <el-input
                  type="textarea"
                  :rows="10"
                  placeholder="请输入内容"
                  v-model="ymlTransform">
              </el-input>
            </el-collapse-item>
            <el-collapse-item title="提取的环境变量" name="4">
              <el-input
                  type="textarea"
                  :rows="10"
                  placeholder="请输入内容"
                  v-model="environmentVariable">
              </el-input>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="Word文件格式化">
          <el-upload
              class="upload-demo"
              drag
              multiple
              :before-upload="formatWordXml" action="">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传xml文件，且不超过500kb</div>
          </el-upload>
        </el-tab-pane>
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
      ymlFile:null,
      transferData: [],
      transferKey:[],
      transferValue:[],
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
    },
    ymlAnalysis(file) {
      this.ymlFile = file;
      let param = new FormData();
      param.append('file', file);
      this.$store.dispatch("ymlAnalysis", {param}).then(res => {
        if (res.meta.success) {
          for (let i = 1; i <= res.list.length; i++) {
            this.transferData.push({
              key: i,
              label: res.list[i]
            });
          }

        }
      })
    },
    ymlExtract() {
      if (this.ymlFile === undefined || this.ymlFile === null) {
        this.$notify.error({
          title: '错误',
          message: '请上传文件！！'
        });
        return;
      }
      if (this.transferKey === undefined || this.transferKey.length === 0) {
        this.$notify.error({
          title: '错误',
          message: '请勾选需要转换的元素！！'
        });
        return;
      }
      this.transferKey.map(item => {
        this.transferValue.push(this.transferData[item].label)
      })
      let param = new FormData();
      param.append('file', this.ymlFile);
      param.append('word', this.transferValue);
      this.$store.dispatch("ymlExtract", {param}).then(res => {
        if (res.meta.success) {
          this.ymlTransform = res.data.yml;
          this.environmentVariable = res.data.env;
        }
      })
    },

    copyYmlTransform() {
      this.copyToClipboard(this.ymlTransform); // 需要复制的文本内容
      this.$message.success('复制成功');
    },
    copyEnvironmentVariable() {
      this.copyToClipboard(this.environmentVariable); // 需要复制的文本内容
      this.$message.success('复制成功');
    },
    // 点击复制到剪贴板函数
    copyToClipboard(content) {
      if (window.clipboardData) {
        window.clipboardData.setData('text', content);
      } else {
        (function (content) {
          document.oncopy = function (e) {
            e.clipboardData.setData('text', content);
            e.preventDefault();
            document.oncopy = null;
          }
        })(content);
        document.execCommand('Copy');
      }
    },
    formatWordXml(file) {
      this.ymlFile = file;
      let param = new FormData();
      param.append('file', file);
      this.$store.dispatch("formatWordXml", {param}).then(res => {
        let headers = res.headers
        let contentType = headers['content-type']
        if (!res.data) {
          console.error('响应异常：', res)
        } else {
          const blob = new Blob([res.data], {type: contentType})
          this.downFile(blob, 'document.xml')


        }
      })
    },
    downFile (blob, fileName) {
      // 非IE下载
      if ('download' in document.createElement('a')) {
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob) // 创建下载的链接
        link.download = fileName // 下载后文件名
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click() // 点击下载
        window.URL.revokeObjectURL(link.href) // 释放掉blob对象
        document.body.removeChild(link) // 下载完成移除元素
      } else {
        // IE10+下载
        window.navigator.msSaveBlob(blob, fileName)
      }
    }
  }
}
</script>

<style>
@import "./assets/css/regist.less";
</style>
