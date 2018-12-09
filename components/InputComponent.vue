<template>
  <el-form
    ref="ruleForm"
    :model="dataObj"
    :rules="rulesObj">
    <h2>_NAME</h2>
    <el-row
      type="flex"
      justify="center">
      <el-col :span="22">
        <el-form-item
          prop="name">
          <el-input
            v-model="dataObj.name"
            :rows="1"
            :disabled="disabled"
            type="textarea"
            @change="$emit('catch-name', dataObj.name)"/>
        </el-form-item>
      </el-col>
    </el-row>
    <h2>_SURNAME</h2>
    <el-row
      type="flex"
      justify="center">
      <el-col :span="22">
        <el-form-item
          prop="surname">
          <el-input
            v-model="dataObj.surname"
            :rows="1"
            :disabled="disabled"
            type="textarea"
            @change="$emit('catch-surname', dataObj.surname)"/>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  props: {
    dataObj: {
      required: true,
      type: Object
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      rulesObj: {
        name: [
          {
            required: true,
            message: 'Please input your name.',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 11,
            message: 'Length should be 3 to 11.',
            trigger: 'blur'
          }
        ],
        surname: [
          {
            required: true,
            message: 'Please input your surname.',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 11,
            message: 'Length should be 3 to 11.',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      let result
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('from child component: successfully added!')
          result = true
        } else {
          console.log('from child component: error submit!!')
          result = false
        }
      })
      return result
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>
<style scoped>
h2 {
  font-size: 1.1rem;
  font-family: InputMonoCondensed;
  background-color: black;
  color: white;
  width: 100%;
  padding: 5px 5px;
  margin-top: 0px;
}
.el-form-item {
  height: 100%;
  margin: 20px 0px 30px 0px;
}
.el-row {
  border-bottom: 2px solid black;
}
</style>
