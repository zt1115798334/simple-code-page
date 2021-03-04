<template>
  <el-row>
    <div>
      <el-button type="primary" @click="getAllTable">获取所有表格</el-button>
    </div>
    <div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkedTableNames" @change="handleCheckedTableNamesChange">
        <el-row>
          <el-col :span="6" v-for="(t,k) in tableNames" :key="k">
            <div class="grid-content bg-purple">
              <el-checkbox :label="t.code">{{ t.tableName }}</el-checkbox>
            </div>
          </el-col>
        </el-row>
      </el-checkbox-group>
    </div>
    <div>
      <el-button type="primary" @click="getSelectTable">获取表详细信息</el-button>
    </div>
    <div>
      <div v-for="(table,k) in tableInfos" :key="k">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-light ac">表名: {{ table.tableNameTrans }}</div>
          </el-col>
        </el-row>
        <el-row align="middle">
          <el-col :span="4">
            <div class="grid-content bg-purple-light ac">列名</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple ac">类型</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light ac">描述</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple ac">是否范围查询</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light ac">是否等于查询</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light ac"></div>
          </el-col>
        </el-row>

        <el-row v-for="(column,l) in table.columns" :key="l">
          <el-col :span="4">
            <div class="grid-content bg-purple-white ac">
              <el-input size="small" v-model="column.columnNameTrans"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-white ac">
              <el-input v-model="column.typeNameTrans"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light ac">{{ column.remarks }}</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple ac">
              <el-checkbox :label="column.code">range</el-checkbox>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light ac">
              <el-checkbox :label="column.code">equal</el-checkbox>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light ac"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-min-content bg-purple-light "></div>
          </el-col>
        </el-row>
      </div>
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
export default {
  data() {
    return {
      checkAll: false,
      checked: false,
      tableNameOptions: [],
      checkedTableNames: [],
      tableNames: [],
      isIndeterminate: true,
      tableInfos: [
        {
          "tableNameTrans": "UsageCompany",
          "columns": [
            {
              "numPrecRadix": "10",
              "isAutoincrement": "YES",
              "code": "C2021030416111934472491287648451",
              "nullable": "0",
              "dataType": "-5",
              "tableCat": "awards",
              "typeName": "BIGINT",
              "columnNameTrans": "id",
              "ordinalPosition": "1",
              "tableName": "t_usage_company",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "NO",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Long",
              "remarks": "",
              "columnName": "id"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934476425592327756",
              "nullable": "0",
              "dataType": "-5",
              "tableCat": "awards",
              "typeName": "BIGINT",
              "columnNameTrans": "projectId",
              "ordinalPosition": "2",
              "tableName": "t_usage_company",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "NO",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Long",
              "remarks": "项目id",
              "columnName": "project_id"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934474896694256576",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "code",
              "ordinalPosition": "3",
              "tableName": "t_usage_company",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "序号",
              "columnName": "code"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934474583180130785",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "usageCompanyName",
              "ordinalPosition": "4",
              "tableName": "t_usage_company",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "使用单位",
              "columnName": "usage_company_name"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934471301325621265",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "usageTechnology",
              "ordinalPosition": "5",
              "tableName": "t_usage_company",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "使用技术",
              "columnName": "usage_technology"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934474688803685222",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "usageObjectSize",
              "ordinalPosition": "6",
              "tableName": "t_usage_company",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "适用对象及规模",
              "columnName": "usage_object_size"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934477141737024242",
              "nullable": "1",
              "dataType": "93",
              "tableCat": "awards",
              "typeName": "DATETIME",
              "columnNameTrans": "usageStartTime",
              "ordinalPosition": "7",
              "tableName": "t_usage_company",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "LocalDateTime",
              "remarks": "使用起始时间",
              "columnName": "usage_start_time"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934472251774992667",
              "nullable": "1",
              "dataType": "93",
              "tableCat": "awards",
              "typeName": "DATETIME",
              "columnNameTrans": "usageEndTime",
              "ordinalPosition": "8",
              "tableName": "t_usage_company",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "LocalDateTime",
              "remarks": "使用终止时间",
              "columnName": "usage_end_time"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934471479674386339",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "companyContacts",
              "ordinalPosition": "9",
              "tableName": "t_usage_company",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "联系人",
              "columnName": "company_contacts"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934471483398479302",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "supportingMaterials",
              "ordinalPosition": "10",
              "tableName": "t_usage_company",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "证明材料",
              "columnName": "supporting_materials"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934476729244095947",
              "nullable": "0",
              "dataType": "-6",
              "tableCat": "awards",
              "typeName": "TINYINT",
              "columnNameTrans": "deleteState",
              "ordinalPosition": "11",
              "tableName": "t_usage_company",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "3",
              "isNullable": "NO",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Integer",
              "remarks": "删除状态：1已删除 0未删除",
              "columnName": "delete_state"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111934472612989382506",
              "nullable": "1",
              "dataType": "93",
              "tableCat": "awards",
              "typeName": "DATETIME",
              "columnNameTrans": "createdTime",
              "ordinalPosition": "12",
              "tableName": "t_usage_company",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "LocalDateTime",
              "remarks": "创建时间",
              "columnName": "created_time"
            }
          ],
          "tableName": "t_usage_company"
        },
        {
          "tableNameTrans": "User",
          "columns": [
            {
              "numPrecRadix": "10",
              "isAutoincrement": "YES",
              "code": "C2021030416111940677878432675166",
              "nullable": "0",
              "dataType": "-5",
              "tableCat": "awards",
              "typeName": "BIGINT",
              "columnNameTrans": "id",
              "ordinalPosition": "1",
              "tableName": "t_user",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "NO",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Long",
              "remarks": "",
              "columnName": "id"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940678292114386368",
              "nullable": "0",
              "dataType": "-5",
              "tableCat": "awards",
              "typeName": "BIGINT",
              "columnNameTrans": "departmentId",
              "ordinalPosition": "2",
              "tableName": "t_user",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "NO",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Long",
              "remarks": "部门id",
              "columnName": "department_id"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940672113101051821",
              "nullable": "1",
              "dataType": "-5",
              "tableCat": "awards",
              "typeName": "BIGINT",
              "columnNameTrans": "parentId",
              "ordinalPosition": "3",
              "tableName": "t_user",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "YES",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Long",
              "remarks": "",
              "columnName": "parent_id"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940674232833761001",
              "nullable": "0",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "account",
              "ordinalPosition": "4",
              "tableName": "t_user",
              "charOctetLength": "20",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "20",
              "isNullable": "NO",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "账户",
              "columnName": "account"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940671218498246041",
              "nullable": "0",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "password",
              "ordinalPosition": "5",
              "tableName": "t_user",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "NO",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "密码",
              "columnName": "password"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940673877796208594",
              "nullable": "0",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "salt",
              "ordinalPosition": "6",
              "tableName": "t_user",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "NO",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "盐",
              "columnName": "salt"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940675407303520499",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "userName",
              "ordinalPosition": "7",
              "tableName": "t_user",
              "charOctetLength": "20",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "20",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "用户名",
              "columnName": "user_name"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940675269603108241",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "phone",
              "ordinalPosition": "8",
              "tableName": "t_user",
              "charOctetLength": "100",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "100",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "手机号",
              "columnName": "phone"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940676372801564072",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "email",
              "ordinalPosition": "9",
              "tableName": "t_user",
              "charOctetLength": "100",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "100",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "邮箱",
              "columnName": "email"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940675802504338588",
              "nullable": "0",
              "dataType": "1",
              "tableCat": "awards",
              "typeName": "CHAR",
              "columnNameTrans": "accountType",
              "ordinalPosition": "10",
              "tableName": "t_user",
              "charOctetLength": "10",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "10",
              "isNullable": "NO",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "账户类型：{admin :管理员用户,specialist:专家,appraising:评优员}",
              "columnName": "account_type"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940672674813823731",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "accountDesc",
              "ordinalPosition": "11",
              "tableName": "t_user",
              "charOctetLength": "50",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "50",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "用户描述",
              "columnName": "account_desc"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940677695884957853",
              "nullable": "1",
              "dataType": "-6",
              "tableCat": "awards",
              "typeName": "TINYINT",
              "columnNameTrans": "sex",
              "ordinalPosition": "12",
              "tableName": "t_user",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "3",
              "isNullable": "YES",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Integer",
              "remarks": "性别：{0:女 1: 男  99: 未知}",
              "columnName": "sex"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940677419387748839",
              "nullable": "0",
              "dataType": "93",
              "tableCat": "awards",
              "typeName": "DATETIME",
              "columnNameTrans": "createdTime",
              "ordinalPosition": "13",
              "tableName": "t_user",
              "sqlDataType": "0",
              "isGeneratedColumn": "YES",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "NO",
              "bufferLength": "65535",
              "columnDef": "CURRENT_TIMESTAMP",
              "typeNameTrans": "LocalDateTime",
              "remarks": "创建时间",
              "columnName": "created_time"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940675546540932277",
              "nullable": "1",
              "dataType": "93",
              "tableCat": "awards",
              "typeName": "DATETIME",
              "columnNameTrans": "updatedTime",
              "ordinalPosition": "14",
              "tableName": "t_user",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "LocalDateTime",
              "remarks": "更新时间",
              "columnName": "updated_time"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940678466092328468",
              "nullable": "1",
              "dataType": "93",
              "tableCat": "awards",
              "typeName": "DATETIME",
              "columnNameTrans": "lastLoginTime",
              "ordinalPosition": "15",
              "tableName": "t_user",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "LocalDateTime",
              "remarks": "最后登录时间",
              "columnName": "last_login_time"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111940671328809818775",
              "nullable": "0",
              "dataType": "-6",
              "tableCat": "awards",
              "typeName": "TINYINT",
              "columnNameTrans": "deleteState",
              "ordinalPosition": "16",
              "tableName": "t_user",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "3",
              "isNullable": "NO",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Integer",
              "remarks": "删除状态：1已删除 0未删除",
              "columnName": "delete_state"
            }
          ],
          "tableName": "t_user"
        },
        {
          "tableNameTrans": "UserLog",
          "columns": [
            {
              "numPrecRadix": "10",
              "isAutoincrement": "YES",
              "code": "C2021030416111946978723097117474",
              "nullable": "0",
              "dataType": "-5",
              "tableCat": "awards",
              "typeName": "BIGINT",
              "columnNameTrans": "id",
              "ordinalPosition": "1",
              "tableName": "t_user_log",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "NO",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Long",
              "remarks": "",
              "columnName": "id"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946971812940498473",
              "nullable": "1",
              "dataType": "-5",
              "tableCat": "awards",
              "typeName": "BIGINT",
              "columnNameTrans": "userId",
              "ordinalPosition": "2",
              "tableName": "t_user_log",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "YES",
              "bufferLength": "65535",
              "decimalDigits": "0",
              "typeNameTrans": "Long",
              "remarks": "操作员ID",
              "columnName": "user_id"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946972393042040060",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "name",
              "ordinalPosition": "3",
              "tableName": "t_user_log",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "操作员姓名",
              "columnName": "name"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946976213969959514",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "type",
              "ordinalPosition": "4",
              "tableName": "t_user_log",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "操作类型",
              "columnName": "type"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946972185810699199",
              "nullable": "1",
              "dataType": "-1",
              "tableCat": "awards",
              "typeName": "TEXT",
              "columnNameTrans": "content",
              "ordinalPosition": "5",
              "tableName": "t_user_log",
              "charOctetLength": "65535",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "65535",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "操作详情",
              "columnName": "content"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946975490854264965",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "ip",
              "ordinalPosition": "6",
              "tableName": "t_user_log",
              "charOctetLength": "20",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "20",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "IP",
              "columnName": "ip"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946976520354175816",
              "nullable": "1",
              "dataType": "93",
              "tableCat": "awards",
              "typeName": "DATETIME",
              "columnNameTrans": "time",
              "ordinalPosition": "7",
              "tableName": "t_user_log",
              "sqlDataType": "0",
              "isGeneratedColumn": "YES",
              "sqlDatetimeSub": "0",
              "columnSize": "19",
              "isNullable": "YES",
              "bufferLength": "65535",
              "columnDef": "CURRENT_TIMESTAMP",
              "typeNameTrans": "LocalDateTime",
              "remarks": "",
              "columnName": "time"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946978053443242850",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "classify",
              "ordinalPosition": "8",
              "tableName": "t_user_log",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "类",
              "columnName": "classify"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946975431318669039",
              "nullable": "1",
              "dataType": "12",
              "tableCat": "awards",
              "typeName": "VARCHAR",
              "columnNameTrans": "fun",
              "ordinalPosition": "9",
              "tableName": "t_user_log",
              "charOctetLength": "255",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "255",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "方法",
              "columnName": "fun"
            },
            {
              "numPrecRadix": "10",
              "isAutoincrement": "NO",
              "code": "C2021030416111946974152281451382",
              "nullable": "1",
              "dataType": "-1",
              "tableCat": "awards",
              "typeName": "TEXT",
              "columnNameTrans": "response",
              "ordinalPosition": "10",
              "tableName": "t_user_log",
              "charOctetLength": "65535",
              "sqlDataType": "0",
              "isGeneratedColumn": "NO",
              "sqlDatetimeSub": "0",
              "columnSize": "65535",
              "isNullable": "YES",
              "bufferLength": "65535",
              "typeNameTrans": "String",
              "remarks": "返回值",
              "columnName": "response"
            }
          ],
          "tableName": "t_user_log"
        }
      ],
      input: ''
    };
  },
  methods: {
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
      this.$store.dispatch("showTable", {}).then(res => {
        const list = res.list;
        const dd = [];
        list.forEach(function (item) {
          dd.push(item.code);
        });
        this.tableNameOptions = dd;
        this.tableNames = list || [];
      })
    },
    getSelectTable() {
      const tableCodes = [];
      this.checkedTableNames.forEach(function (item) {
        tableCodes.push(item);
      });
      console.log(tableCodes.join(","));
      let param = new FormData();
      param.append('tableCodes', tableCodes.join(","));
      this.$store.dispatch("showColumn", param).then(res => {
        const list = res.list;
        this.tableInfos = list || [];
      })
    },
    getTableTrans() {
      this.$store.dispatch("getTableTrans", {}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
@import "./assets/css/regist.less";

.el-row {
  margin-bottom: 5px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}

.bg-purple-white {
  background: #ffffff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-min-content {
  min-height: 8px;
}

.grid-content {
  min-height: 40px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
