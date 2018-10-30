<template>
  <div>
      <Header/>
      <el-container>
        <el-aside style="background-color:white;width:20%;padding:10px;">zffz</el-aside>
        <el-main style="height:60%;background-color:grey;">
          <el-form ref="form" :model="form" :rules="rules" label-width="120px" style="width:405px;">
            <el-form-item label="Card's name" prop="cardName" size="mini">
                <el-input type="text" v-model="form.cardName"></el-input>
            </el-form-item>
            <el-form-item label="Card Number" prop="cardNumber" size="mini">
                <el-input v-model="form.cardNumber"></el-input>
            </el-form-item>
            <el-form-item label="Card Expiracy"  prop="cardExpiracy" size="mini">
                <el-input type="text" v-model="form.cardExpiracy" placeholder="MM/YY"></el-input>
            </el-form-item>
            <el-form-item label="Cv code" prop="cardLast3digits" size="mini">
                <el-input v-model="form.cardLast3digits"></el-input>
            </el-form-item>
              <el-button type="primary" @click="pay()">Primary</el-button>
          </el-form>
        </el-main>
      </el-container>
  </div>
</template>

<script>

import Header from '@/components/Header'

export default {
  name: 'Products',
  components: { Header },
  data () {
    return {
      form: {
        cardName: '',
        cardNumber: '',
        cardExpiracy: '',
        cardLast3digits: ''
      },
      rules: {
        cardName: [{ required: true, message: 'this field is required', trigger: [ 'blur', 'change' ] }],
        cardNumber: [{ required: true, message: 'this field is required', trigger: [ 'blur', 'change' ] }
        ],
        cardExpiracy: [{ required: true, message: 'this field is required', trigger: [ 'blur', 'change' ] },
          { validator: this.test, message: 'this field is required', trigger: [ 'blur', 'change' ] }
        ],
        cardLast3digits: [
          { required: true, message: 'this field is required', trigger: [ 'blur', 'change' ] },
          { min: 3, max: 3, message: 'Cv code must contain 3 numbers', trigger: [ 'blur', 'change' ] }
        ]
      }
    }
  },
  methods: {
    pay () {
      alert('pay')
    },
    test (rule, value, callback) {
      if (value.length !== 5) callback(new Error('Please inp'))
      if (value.indexOf('/') === -1) callback(new Error('Please input the'))
      callback(new Error('Please input the password'))
    }
  }
}
</script>

<style scoped>

</style>
