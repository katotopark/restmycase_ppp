<template>
  <div>
    <header-component @handle-select="handleSelect"/>
    <el-row
      id="container"
      type="flex"
      justify="center">
      <el-col
        id="content"
        :xs="20"
        :sm="20"
        :md="12"
        :lg="12">
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
      } /*else if (this.selection == 2) {
        this.textStrings = 'this is the how page'
      } else if (this.selection == 3) {
        this.textStrings = 'hohoho'
      }*/
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
#content {
  /* border: 2px solid black; */
}
</style>
