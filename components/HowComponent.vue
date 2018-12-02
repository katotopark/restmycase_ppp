<template>
  <div>
    <span
      v-if="errors">
      <text-component
        v-for="err in errors"
        :text-strings="err"
        :key="err.key"/>
    </span>
    <span
      v-if="successMessage">
      <text-component
        id="succces-message"
        :text-strings="successMessage"/>
    </span>
    <span
      v-if="!personSubmit">
      <el-row
        id="top-row"
        type="flex"
        justify="center">
        <el-col
          :span="24">
          <input-component
            ref="inputForm"
            :data-obj.sync="personObj"
            @catch-name="onCatchName"
            @catch-surname="onCatchSurname"/>
          <el-row
            class="button-component"
            type="flex"
            justify="center">
            <el-col :span="22">
              <button-component
                @submit="onSubmit"
                @clear="onClear"/>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </span>
    <el-row
      id="bottom-row"
      type="flex"
      justify="center">
      <el-col :span="24">
        <table-component
          :data-obj="attendees"
          :table-props="tableProps"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import InputComponent from './InputComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
import TableComponent from './TableComponent.vue'
import TextComponent from './TextComponent.vue'

const IPFS = require('ipfs-http-client')
const ipfs = IPFS()

export default {
  components: {
    InputComponent,
    ButtonComponent,
    TableComponent,
    TextComponent
  },
  data() {
    return {
      tableProps: ['name', 'surname', 'hash'],
      attendees: [],
      personObj: {
        name: '',
        surname: '',
        hash: ''
      },
      personSubmit: false,
      newName: '',
      newSurname: '',
      newHash: '',
      successMessage: '',
      errors: []
    }
  },
  computed: {
    // formatName() {
    //   let formattedName
    //   formattedName = this.newName[0]
    //   return formattedName
    // }
  },
  mounted() {
    //do something after mounting vue instance
    console.log('mounted: ', this.$refs.inputForm.submitForm)
  },
  methods: {
    async addToIpfs(p) {
      const contextBuffer = Buffer.from(JSON.stringify(p))
      return ipfs
        .add(contextBuffer)
        .then(res => {
          return res.map(file => {
            console.log('writing to ipfs returned the hash:', file.hash)
            this.newHash = file.hash
            return file.hash
          })
        })
        .catch(err => {
          console.log('ipfs add fail', err)
        })
    },
    async getFromIpfs(hash) {
      ipfs.cat(hash, (err, file) => {
        if (err) {
          throw err
        }
        console.log(file.toString('utf8'))
      })
    },
    onCatchName(e) {
      this.newName = e
    },
    onCatchSurname(e) {
      this.newSurname = e
    },
    async onSubmit() {
      this.checkForm()

      if (this.errors.length == 0) {
        this.personObj = {
          name: this.newName,
          surname: this.newSurname
        }

        await this.addToIpfs(this.personObj)
        this.personObj.hash = this.newHash
        this.attendees.push(this.personObj)
        this.personSubmit = true
        this.showSuccessMessage(
          `${this.personObj.name} ${this.personObj.surname}`,
          this.personObj.hash
        )

        this.newName = ''
        this.newSurname = ''
        this.newHash = ''
        this.personObj = {
          name: this.newName,
          surname: this.newSurname
        }
        this.errors = []
        console.log('submission: ', this.personSubmit)
      } else {
        this.personObj = {
          name: this.newName,
          surname: this.newSurname
        }
        this.newHash = ''
        this.personSubmit = false

        console.log('submission: ', this.personSubmit)
      }
      console.log(this.attendees.length)
    },
    showSuccessMessage(name, hash) {
      this.successMessage = `Thank you for registering ${name}.
      Your registration hash is ${hash}.`
    },
    onClear() {
      this.$refs.inputForm.resetForm()
    },
    checkForm(e) {
      this.errors = []

      if (this.personSubmit) {
        this.errors.push('You have already submitted.')
      }
      if (!this.$refs.inputForm.submitForm()) {
        this.errors.push('You need to fill all the fields.')
      }
      // e.preventDefault()
    }
  }
}
</script>
<style scoped>
#top-row {
  border: 2px solid black;
  padding-bottom: 20px;
}
#bottom-row {
  margin-top: 40px;
  padding: 0px 0px;
  border: 2px solid black;
}
#succces-message {
  padding: 5px 10px;
  margin-bottom: 20px;
  background-color: black;
  color: white;
}
.el-row.button-component {
  margin-top: 20px;
}
</style>
