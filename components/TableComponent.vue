<template>
  <el-table
    :data="dataObj">
    <el-table-column
      label="#"
      type="index"
      align="center"
      width="40"/>
    <el-table-column
      v-for="elem in tableProps"
      :key="elem.key"
      :prop="elem"
      :label="elem.toUpperCase()"
      align="center"/>
      <!-- <el-table-column
        :prop="dataObj.surname"
        label="SURNAME"/>
      <el-table-column
        :prop="dataObj.hash"
        label="HASH"/> -->
  </el-table>
</template>
<script>
export default {
  props: {
    dataObj: {
      required: true,
      type: Array
    },
    tableProps: {
      required: true,
      type: Array
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.el-table {
  font-family: inherit;
  color: black;
  font-size: 1rem;
  border: 0px;
  background-color: rgb(247, 244, 204);
  /* border: 2px solid black; */
}
.el-table-column:hover {
  background-color: red;
}
</style>
