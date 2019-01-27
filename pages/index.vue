<template>
  <div>
    <header-component @handle-select="handleSelect"/>
    <el-row
      id="container"
      type="flex"
      justify="center">
      <el-col
        id="content"
        :xs="22"
        :sm="22"
        :md="10"
        :lg="10">
        <what-component
          v-if="selection == 0"
          @handle-click="handleClick"/>
        <how-component
          v-if="selection == 1"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
console.log('Hello!')
import HeaderComponent from '../components/HeaderComponent.vue'
import HowComponent from '../components/HowComponent.vue'
import WhatComponent from '../components/WhatComponent.vue'

export default {
  components: {
    HeaderComponent,
    HowComponent,
    WhatComponent
  },
  data() {
    return {
      selection: null
    }
  },
  computed: {},
  watch: {
    selection() {
      if (this.selection == 0) {
        this.textStrings = 'this is the what page'
      } else if (this.selection == 1) {
        this.textStrings = 'this is the how page'
      }
    }
  },
  created() {
    this.selection = 0
  },
  methods: {
    handleSelect(e) {
      console.log(e)
      this.selection = e
    },
    handleClick(e) {
      console.log('button clicked')
      this.selection = 1
    }
  }
}
</script>

<style>
#container {
  margin: 50px;
}
</style>
