<template>
  <div>
    <div class="invite-text">
      <h3 @mouseover="changeRMC">_{{ restMyCase }}</h3>
      <p>You are cordially invited to a master thesis presentation about a decentralized infrastructure for bureaucratic commodification. Please <el-button @click="$emit('handle-click')">register</el-button>.</p>
    </div>
    <div
      class="address-card">
      <h3>_ADDRESS</h3>
      <div
        :style="addressStyle"
        @mouseover="changeAddressDisplay"
        v-text="addressStrings"/>
    </div>
    <div class="date-time">
      <h3>_DATE</h3>
      <div>14/12/18</div>
      <h3>_TIME</h3>
      <div
        :style="timeStyle"
        @mouseover="changeTime">{{ timeStrings }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      restMyCase: '',
      addressStyle: '',
      initialStyle: `font-family: InputMonoCondensedLight`,
      addressStrings: '',
      robotAddress: `
      Latitude: 53.0729046, 
      Longitude: 8.84104579999996
      `,
      humanAddress: `
        Ehemaliges Schwesternwohnheim
        Am Schwarzen Meer 142
        28205 Bremen`,
      timeStrings: '',
      timeStyle: ''
    }
  },
  watch: {
    addressStrings() {
      const newStyle = `font-family: InputMonoCondensedLightItalic`
      this.addressStrings === this.humanAddress
        ? (this.addressStyle = newStyle)
        : (this.addressStyle = this.initialStyle)
    },
    timeStrings() {
      const newStyle = `font-family: InputMonoCondensedLightItalic`
      const newTime = '7:30PM'
      this.timeStrings === newTime
        ? (this.timeStyle = newStyle)
        : (this.timeStyle = this.initialStyle)
    }
  },
  created() {
    this.addressStyle = this.initialStyle
    this.addressStrings = this.robotAddress
    this.restMyCase = 'RMC'
    this.timeStyle = this.initialStyle
    this.timeStrings = '19:30'
  },
  methods: {
    changeAddressDisplay() {
      this.addressStrings === this.robotAddress
        ? (this.addressStrings = this.humanAddress)
        : (this.addressStrings = this.robotAddress)
    },
    changeRMC() {
      const newString = 'Rest My Case'
      this.restMyCase === 'RMC'
        ? (this.restMyCase = newString.toUpperCase())
        : (this.restMyCase = 'RMC')
    },
    changeTime() {
      const initialTime = '19:30'
      const newTime = '7:30PM'
      this.timeStrings === initialTime
        ? (this.timeStrings = newTime)
        : (this.timeStrings = initialTime)
    }
  }
}
</script>
<style scoped>
div.invite-text {
  border: 2px solid black;
  padding-bottom: 20px;
}
div.invite-text p {
  font-size: 1rem;
  line-height: 30px;
  padding: 10px 10px;
  margin-top: 10px;
  font-family: InputMonoCondensedLightItalic;
  hyphens: none;
}
div.invite-text .el-button {
  background-color: transparent;
  border: 0px;
  font-family: InputMonoCondensedLightItalic;
  color: black;
  font-size: 1rem;
  padding: 0px;
  padding-bottom: 3px;
  border-radius: 0px;
}
div.invite-text .el-button:hover {
  border-bottom: 2px solid black;
}
div.invite-text h3 {
  width: 100%;
  background-color: black;
  color: white;
  font-size: 1.1rem;
  padding: 15px 5px;
  font-family: InputMonoCondensed;
}
div.address-card {
  border: 2px solid black;
  height: 10rem;
}
div.address-card div {
  padding-left: 10px;
  margin-top: 5px;
  padding-top: 20px;
  height: 75% !important;
  line-height: 30px;
  display: block;
}
div.address-card h3,
div.date-time h3 {
  width: 100%;
  background-color: black;
  color: white;
  font-size: 1.1rem;
  padding: 5px 5px;
  font-family: InputMonoCondensed;
}
.date-time {
  border: 2px solid black;
  height: 200px;
}
div.date-time div {
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 10px 10px;
  /* border: 2px solid red; */
}
</style>
