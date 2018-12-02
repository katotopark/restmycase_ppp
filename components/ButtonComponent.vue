<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <el-button
        type="submit"
        @click="$emit('submit')">Submit</el-button>
    </el-col>
    <el-col :span="12">
      <el-button
        type="submit"
        @click="$emit('clear')">Clear</el-button>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.el-button {
  font-family: InputMonoCondensed;
  font-size: 1.1rem;
  margin-top: 0.1rem;
  border-radius: 0px;
  width: 100%;
  height: 4rem;
  border: 0px;
  background-color: rgb(247, 244, 204);
  color: black;
  border: 2px solid black;
}
.el-button:hover {
  background-color: black;
  color: white;
  font-family: InputMonoCondensedItalic;
}
.el-button:visited {
  color: black;
  background-color: rgb(247, 244, 204);
  font-family: InputMonoCondensed;
}
</style>
