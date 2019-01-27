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
      v-if="!isAdmin && personSubmit && !successMessage">You have already submitted your registration.</span>
    <span
      v-if="isAdmin || !personSubmit">
      <el-row
        id="top-row"
        type="flex"
        justify="center">
        <el-col
          :span="24">
          <input-component
            ref="inputForm"
            :data-obj.sync="personObj"
            :disabled="loading"
            @catch-name="onCatchName"
            @catch-surname="onCatchSurname"/>
          <el-row
            class="button-component"
            type="flex"
            justify="center">
            <el-col :span="22">
              <button-component
                v-if="!loading"
                @submit="onSubmit"
                @clear="onClear"/>
              <dissection-component
                v-if="loading"
                :dimensions="dimensions"
                wrapperstyle="text-align:center"/>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </span>
    <el-row
      class="bottom-row"
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
import DissectionComponent from './DissectionComponent.vue'

import db from '../plugins/firebase'

const IPFS = require('ipfs-http-client')
const ipfs = IPFS('ipfs.infura.io', '5001', { protocol: 'https' })

export default {
  components: {
    InputComponent,
    ButtonComponent,
    TableComponent,
    DissectionComponent,
    TextComponent
  },
  head() {
    return {
      title: 'RestMyCase - Log'
    }
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
      dimensions: {
        x: 100,
        y: 100
      },
      personSubmit: JSON.parse(localStorage.getItem('personSubmit')),
      newName: '',
      newSurname: '',
      newHash: '',
      successMessage: '',
      errors: [],
      isAdmin: this.$route.query.admin !== undefined,
      loading: false
    }
  },
  firebase: {
    attendees: {
      source: db.ref('/registrations'),

      cancelCallback(err) {
        console.error('Error in registrations firestore:', err)
      }
    }
  },

  mounted() {},
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
        this.loading = true
        this.personObj = {
          name: this.newName,
          surname: this.newSurname
        }

        await this.addToIpfs(this.personObj)
        this.personObj.hash = this.newHash
        this.$firebaseRefs.attendees.push(this.personObj)

        this.setPersonSubmit(true)

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

        this.setPersonSubmit(false)

        console.log('submission: ', this.personSubmit)
      }
      console.log(this.attendees.length)
      this.loading = false
    },
    showSuccessMessage(name, hash) {
      this.successMessage = `Thank you for registering, ${name}.
      Your registration hash is ${hash}.`
    },
    onClear() {
      this.$refs.inputForm.resetForm()
    },
    checkForm(e) {
      this.errors = []

      if (!this.isAdmin && this.personSubmit) {
        this.errors.push('You have already submitted.')
      }
      if (!this.$refs.inputForm.submitForm()) {
        this.errors.push('You need to fill all the fields.')
      }
    },
    setPersonSubmit(newValue) {
      localStorage.setItem('personSubmit', JSON.stringify(newValue))
      this.personSubmit = newValue
    }
  }
}
</script>
<style scoped>
#top-row {
  border: 2px solid black;
  padding-bottom: 20px;
}
.bottom-row {
  margin-top: 40px;
  padding: 0px 0px;

  border: 2px solid black;
  border-bottom: none;
}

.el-table_1_column_1 {
  min-width: 2em;
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
