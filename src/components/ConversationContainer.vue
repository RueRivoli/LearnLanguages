<template>
  <div>
    <div class="conversationContainer">
        <div class="flex-column" v-for="(item, id) in messages" :key="id">
          <Message :item="item"/>
        </div>
      </div>
      <div class="card-footer">
        <el-form :model="form" style="width:500px;margin:auto;">
          <el-form-item>
            <el-input type="textarea"
              :rows="5"
              placeholder="Please input" v-model="form.message"/>
          </el-form-item>
          <el-button type="primary" size="mini" @click.prevent="send">Send</el-button>
        </el-form>
      </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Message from '@/components/Message'

export default {
  name: 'ConversationContainer',
  components: { Message },
  props: [ 'messages', 'sendMessage' ],
  data () {
    return {
      form: {
        message: ''
      }
    }
  },
  mounted () {
  },
  created () {
  },
  methods: {
    send (e) {
    //   e.preventDefault()
      console.log('CONV CON')
      console.log(this.form.message)
      this.$emit('sendMessage', this.form.message)
      this.message = ''
    }
  },
  computed: {
    ...mapGetters([ 'envInfos' ])
  }
}
</script>

<style scoped>

.flex-column{
    display:flex;
    flex-direction:column;
}

.conversationContainer{
    height:400px;
    background-color:skyblue;
    overflow-x:scroll;
}

</style>
