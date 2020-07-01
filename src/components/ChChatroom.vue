<template>
  <div class="ch-chatroom">
    <ch-chatroom-head
      :userInfo="userInfo"
      :updateUserInfo="updateUserInfo" />
    <div class="chatroom-content" ref="chatroomContent">
      <div class="chatroom-content-box">
        <ch-chatroom-msg-bubble
          v-for="(msg, mIdx) in msgList"
          :key="msg ? `${msg.people}-${msg.timestamp}` : mIdx"
          v-bind="msg"
          :userInfo="userInfo" />
      </div>
    </div>
    <ch-chatroom-input
      :userInfo="userInfo"
      :updateMsgList="updateMsgList" />
  </div>
</template>
<script>
import ChChatroomHead from './ChChatroomHead.vue';
import ChChatroomMsgBubble from './ChChatroomMsgBubble.vue';
import ChChatroomInput from './ChChatroomInput.vue';

import { fDbChatroomRef } from '../firebase';

export default {
  name: 'ChChatroom',
  components: {
    ChChatroomHead,
    ChChatroomMsgBubble,
    ChChatroomInput,
  },
  props: {
    userInfo: String,
    updateUserInfo: Function,
  },
  data() {
    return {
      msgObje: {
        people: '',
        msg: '',
        timestamp: '',
      },
      msgList: [],
      updateMsgList: null,
    };
  },
  mounted() {
    const ref = fDbChatroomRef('default');
    ref.on('child_added', (data) => {
      this.msgList.push(data.val());
      const { chatroomContent } = this.$refs;
      if (chatroomContent) {
        this.$nextTick(() => {
          chatroomContent.scrollTo({
            top: chatroomContent.scrollHeight,
            behavior: 'smooth',
          });
        });
      }
    });
    this.updateMsgList = (msgObj) => ref.push(msgObj);
  },
};
</script>
<style lang="stylus">
.ch-chatroom
  display flex
  flex-direction column
  border-right 1px solid black
  .chatroom-content
    flex 1
    overflow auto
    padding 20px
    .chatroom-msg-bubble
      line-height 60px
</style>
