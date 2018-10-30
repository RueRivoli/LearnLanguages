<template>
  <div>
      <Header/>
      <el-container>
      <el-aside style="background-color:grey;width:20%;padding:10px;max-height:900px;">
        <div style="border: 1px solid black;border-radius: 7px;margin-bottom: 10px;cursor:pointer;">
            <h2>Sophie</h2>
            <h1>England</h1>
        </div>
        <div style="border: 1px solid black;border-radius: 7px;margin-bottom: 10px;cursor:pointer;">
           <h2>Wiu Yee</h2>
            <h1>Japan</h1>
        </div>
        <div style="border: 1px solid black;border-radius: 7px;cursor:pointer;">
            <h2>Kimberlee</h2>
            <h1>USA</h1>
        </div>
        </el-aside>
       <el-main >     {{ clients + ' people connected ' }}
         <ConversationContainer :messages="messages" @sendMessage="send"/>
       </el-main>
      </el-container>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import io from 'socket.io-client'
import ConversationContainer from '@/components/ConversationContainer'

export default {
  name: 'Chat',
  components: { Header, ConversationContainer },
  data () {
    return {
      clients: '',
      messages: [],
      socket: io('localhost:3001')
    }
  },
  mounted () {
    this.socket.on('MESSAGE', (data) => {
      console.log('received data', data)
      this.messages = [...this.messages, data]
      // you can also do this.messages.push(data)
    })
    this.socket.on('CLIENTS', (data) => {
      console.log('Clients : ', data)
      this.clients = data
      // you can also do this.messages.push(data)
    })
    this.socket.on('ALLMESSAGE', (data) => {
      console.log('received data all ', data)
      this.messages = [...this.messages, data]
      // you can also do this.messages.push(data)
    })
  },
  created () {
  },
  methods: {
    send (message) {
      // e.preventDefault()
      console.log('SEND MESSAGE')
      console.log(message)
      var data = {
        user: this.envInfos.login,
        message: message
      }
      this.socket.emit('SEND_MESSAGE', data)
      this.messages = [...this.messages, data]
      console.log('emit data', message)
      this.message = ''
    }
  },
  computed: {
    ...mapGetters([ 'envInfos' ])
  }
}
</script>

<style scoped>

.messageBox{
  width:20%;
  border-radius:3px;
  border: 2px solid black;
  background-color:blue;
  color: white;
  padding:5px;
  margin-bottom:4px;
}

.fromMe{
  align-self:flex-end;
}

.fromOther{
  align-self:flex-start;
}

</style>
