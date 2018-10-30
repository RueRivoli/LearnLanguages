<template>
    <div class="messageBox fromMe" :class="{ fromOther: !isMe, fromMe: isMe }">
        {{ (isMe ? '' : item.user + ': ')  + item.message }}
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Message',
  components: {},
  props: [ 'item' ],
  data () {
    return {
      isMe: ''
    }
  },
  mounted () {
    this.isMe = (this.item.user === this.envInfos.login)
  },
  created () {
  },
  methods: {
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
  padding:5px;
  margin-bottom:4px;
}

.fromMe{
  align-self:flex-end;
  background-color:#F0F8FF;
  color:black;
}

.fromOther{
  align-self:flex-start;
  background-color:#008B8B;
  color: white;
}

</style>
