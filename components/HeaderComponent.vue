<template>
  <el-row>
    <el-col :span="24">
      <el-menu
        background-color="rgb(247, 244, 204)"
        mode="horizontal">
        <el-col
          v-for="(item,i) in menuItems"
          :key="item.key"
          :span="24/menuItems.length">
          <el-menu-item :index="i.toString()">
            <el-button @click="$emit('handle-select', i)">{{ item }}</el-button>
          </el-menu-item>
        </el-col>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      menuItems: ['Info', 'Log']
    }
  },
  methods: {}
}
</script>
<style scoped>
.el-button {
  height: 100%;
  width: 100%;
  padding: 0px;
  padding-left: 20px;
  margin-left: 0px;
  border-radius: 0px;
  border: 0px;
  background-color: rgb(247, 244, 204);
  color: black;
  font-family: InputMonoCondensed;
  font-size: 1.2rem;
  text-align: left;
  align-items: center;
}
.el-menu {
  border: 0px;
  width: 100%;
  border-bottom: 2px solid black;
  /* position: fixed; */
}
.el-button:hover {
  color: white;
  background-color: black;
  font-family: InputMonoCondensedItalic;
  border: 0px;
}
.el-menu-item {
  background-color: black;
  padding: 0px;
  border: 0px;
}
</style>
